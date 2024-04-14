import requests
import json
import time
import re
import random
from selenium import webdriver
from bs4 import BeautifulSoup as bs
from bs4 import Comment
import numpy as np
from datetime import datetime
from slugify import slugify
import uuid
from datetime import timedelta

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}


# Create a date time formater for the date_published
def convert_to_datetime(date_string):
    if "Вчера" in date_string:
        # Get yesterday's date
        yesterday = datetime.now() - timedelta(days=1)
        date = yesterday.strftime("%d.%m.%Y")
        time = date_string.split(", ")[1]
        datetime_string = f"{date}, {time}"
    elif "Сегодня" in date_string:
        # Get today's date
        today = datetime.now()
        date = today.strftime("%d.%m.%Y")
        time = date_string.split(", ")[1]
        datetime_string = f"{date}, {time}"
    else:
        datetime_string = date_string
        
    
    # Convert datetime string to datetime object
    date_pattern = ["%d.%m.%Y, %H:%M", "%d.%m.%Y, %H:%M"]
    for pattern in date_pattern:
        try:
            datetime_obj = datetime.strptime(datetime_string, pattern)
            break
        except ValueError:
            datetime_obj = datetime.strptime(datetime_string, '%d.%m.%Y')

    # Convert datetime object to ISO-8601 format
    iso_datetime = datetime_obj.isoformat()
    
    return iso_datetime

def fill_job_type(location_type):
    job_types = [
            'Полная занятость',
            'Частичная занятость',
            'Договор',
            'Проектная работа',
            'Волонтер',
            'Стажировка',
            'Договор'
        ]
    location_types = [
            'Полный день',
            'Свободный график',
            'Удаленно',
            'Временная работа',
            'Посменно',
            'Совмещение',
            'Вахта',
        ]
        
    if location_type in location_types:
            index = location_types.index(location_type)
            return job_types[index]
        
    return ''

# Function for cleaning text

# Connect to API and get existing data

# Function for posting data to API

vacancy_data = []


#RABOTA.YKT
def ykt_get_vacancies():
    rabota_pages = np.arange(0, 10, 1)
    for page in rabota_pages:
        page = requests.get('https://rabota.ykt.ru/jobs?page=' + str(page), headers=headers)
        soup = bs(page.text, 'html.parser')
        source = 'https://rabota.ykt.ru/'
        name = 'RabotaYkt'
        vacancy = soup.find_all('li', class_="r-vacancy_list_item ng-scope") #find each class "r-vacancy_body_full"
        time.sleep(random.randint(2, 8))
        for item in vacancy:
            title = item.find('span', class_="r-vacancy_title").text if item.find('span', class_="r-vacancy_title") else None
            url = source + item.find('a', class_="r-vacancy_title_link")['href'] if item.find('a', class_="r-vacancy_title_link") else None
            company = item.find('div', class_="r-vacancy_company" ).text if item.find('div', class_="r-vacancy_company") else None
            salary = item.find('div', class_="r-vacancy_salary ng-binding" ).text if item.find('div', class_="r-vacancy_salary ng-binding") else None
            if '-' in salary:
                index = salary.find("-")
                salary = re.sub(r'[^\d.,]', '', salary[index:]).replace('.', '')
            else:
                salary = re.sub(r'[^\d.,]', '', salary).replace('.', '')
            date_published = item.find('div', class_="r-vacancy_createdate").text if item.find('div', class_="r-vacancy_createdate") else str(datetime.today().strftime("%d.%m.%Y, %H:%M"))
            contact = item.find('div', class_="r-vacancy_contacts_phone").text if item.find('div', class_="r-vacancy_contacts_phone") else None
            email = item.find('div', class_="r-vacancy_contacts_email").text if item.find('div', class_="r-vacancy_contacts_email") else None
            #tags, parents_tags
            all_tags = item.find_all('div', class_="r-vacancy_categories") 
            tag = []
            parent_tags = []
            for t in all_tags:
                tag = [i.text for i in t.find_all('a')] if  t.find_all('a') else []
                parent_tags = [i.text.replace('\n', ' ').replace('(', '').replace(')', '') for i in t.find_all('span')] if t.find_all('span') else []
            #education, experience, schedule
            add_info = item.find_all('dd')
            education = [add_info[0].text if len(add_info) > 0 else None]
            experience = [add_info[1].text if len(add_info) > 1 else None]
            schedule = [add_info[2].text if len(add_info) > 2 else None]
            location = item.find('div', class_="r-vacancy_work-address_address").text if item.find('div', class_="r-vacancy_work-address_address") else None
            #job_info
            job_information = item.find('div', class_="r-vacancy_body_full")
            if job_information:
                job_information.find('div', class_="r-vacancy_company").decompose()
                job_information.find('div', class_="r-vacancy_categories").decompose() 
                for element in job_information(text=lambda text: isinstance(text, Comment)):
                    element.extract()
                job_info = job_information
            else:
                job_info = None
            #image
            companyLogo = item.find('div', class_="r-vacancy_company_logo")
            imageUrl = None
            if companyLogo:
                if companyLogo.img:
                    imageUrl = companyLogo.img['src']
                    imageUrl = source + imageUrl if 'http' not in imageUrl else imageUrl
            else: 
                imageUrl= None

            vacancy_obj = {
                "title" : title,
                "slug": slugify(title) + '-' + str(uuid.uuid4())[:8],
                "description" : str(job_info) if job_info else None,
                "companyName" : company.strip('\n') if company else None,
                "companyLogoUrl": imageUrl if imageUrl else None, 
                "salary" : salary if salary else "0",
                "type": fill_job_type(schedule[0]) if schedule else 'Частичная занятость',
                "location" : location if location else None, 
                "locationType" : schedule[0] if schedule[0] else 'Свободный график',
                "createdAt" : convert_to_datetime(date_published),
                "applicationEmail" : email.strip('\n') if email else None,
                "applicationUrl" : url,
                "applicationPhone" : contact.strip('\n').replace(u'\xa0', u'') if contact else None,
                "experience" : experience[0] if experience else "Не имеет значения",
                "education" : education[0] if education else "Не имеет значения",
                "tags" : tag,
                "parentTags" : parent_tags,
                "approved": True,
            }
            print(vacancy_obj)
            vacancy_data.append(vacancy_obj)


##HH.RU
def hh_get_vacancies(): 
    hh_link_list = []
    hh_pages = np.arange(0, 3, 1)
    for page in hh_pages:
        page = requests.get('https://yakutsk.hh.ru/search/vacancy?page=' + str(page), headers=headers)
        soup = bs(page.text, 'html.parser')
        source = 'https://yakutsk.hh.ru/'
        name = 'yakutsk.hh.ru'
        hh_vacancy = soup.find_all('div', class_="serp-item serp-item_link vacancy-serp-item_clickme")
        for div in hh_vacancy:
            link = div.find('a', class_="bloko-link")['href']
            hh_link_list.append(link)

    if hh_link_list:
        for link in hh_link_list:
            hh_soup = requests.get(link, headers=headers)
            hh_soup = bs(hh_page.text, 'html.parser')

            url = link
            title = hh_soup.find('div', class_="bloko-header-section-1").text if hh_soup.find('span', class_="bloko-header-section-1") else None
            company = hh_soup.find('span', class_="bloko-header-section-2 bloko-header-section-2_lite" ).text if hh_soup.find('span', class_="bloko-header-section-2 bloko-header-section-2_lite") else None
            salary = hh_soup.find('span', class_="bloko-header-section-2 bloko-header-section-2_lite" ).text if hh_soup.find('span', class_="bloko-header-section-2 bloko-header-section-2_lite") else None
            if 'до' in salary:  
                index = salary.find("до")
                salary = re.sub(r'[^\d.,]', '', salary[index:]).replace('.', '')
            else:
                salary = re.sub(r'[^\d.,]', '', salary).replace('.', '')
            experience = hh_soup.find('span', class_="vacancy-experience")
            location = hh_soup.find('span', class_="vacancy-view-raw-address").text if hh_soup.find('span', class_="vacancy-view-raw-address") else None
            job_information = hh_soup.find('div', class_="g-user-content").text
            date_published = hh_soup.find('p', class_="vacancy-creation-time-redesigned")['span'].text if hh_soup.find('p', class_="vacancy-creation-time-redesigned") else str(datetime.today().strftime("%d.%m.%Y, %H:%M"))
            # contact = hh_soup.find('div', class_="").text if hh_soup.find('div', class_="") else None
            # email = hh_soup.find('div', class_="").text if hh_soup.find('div', class_="") else None
            education = None
            schedule = [add_info[2].text if len(add_info) > 2 else None]
            companyLogo = hh_soup.find('img', class_="vacancy-company-logo-image-redesigned")['src'] if hh_soup.find('img', class_="vacancy-company-logo-image-redesigned") else None
            if companyLogo:
                imageUrl = source + imageUrl if 'http' not in imageUrl else imageUrl
            else: 
                imageUrl= None


ykt_get_vacancies()

##save data to json file
with open('scripts/vacancy_data.json', 'w', encoding='utf-8') as file:
    json_vacancy = json.dump(vacancy_data, file, ensure_ascii=False, indent=4)
    print('Data saved to vacancy_data.json')
        
            


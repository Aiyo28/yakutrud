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
import commentjson

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}


# Create a date time formater for the date_published

# Function for cleaning text

# Connect to API and get existing data

# Function for posting data to API



#RABOTA.YKT
vacancy_data = []

rabota_pages = np.arange(0, 1, 1)
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
        date_published = item.find('div', class_="r-vacancy_createdate").text if item.find('div', class_="r-vacancy_createdate") else None
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
        #job_info
        job_information = item.find('div', class_="r-vacancy_body_full")
        if job_information:
            job_information.find('div', class_="r-vacancy_company").decompose()
            job_information.find('div', class_="r-vacancy_categories").decompose() 
            for element in job_information(text=lambda text: isinstance(text, Comment)):
                element.extract()
            job_info = job_information.text
        else:
            job_info = None


        vacancy_obj = {
            "title" : title,
            "description" : job_info.replace('\n', ' ') if job_info else None,
            "companyName" : company,
            "salary" : salary,
            "type" : schedule,
            "createAt" : date_published,
            "applicationEmail" : email,
            "applicationUrl" : url,
            "applicationPhone" : contact,
            "experience" : experience,
            "education" : education,
            "tags" : tag,
            "parent_tags" : parent_tags,
        }
        print(vacancy_obj)
        vacancy_data.append(vacancy_obj)

with open('src/lib/vacancy_data.json', 'w', encoding='utf-8') as file:
    json_vacancy = json.dump(vacancy_data, file, ensure_ascii=False, indent=4)
    print('Data saved to vacancy_data.json')

        # api_keylinks = [item.get("url") for item in api_data]
        # if data not in api_data:
        #         post_API(data)
        # commit to git 
        
            


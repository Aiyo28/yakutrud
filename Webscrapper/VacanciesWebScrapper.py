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

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}


# Create a date time formater for the date_published

# Function for cleaning text

# Connect to API and get existing data

# Function for posting data to API



#RABOTA.YKT
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
        date_published = item.find('div', class_="r-vacancy_createdate").text if item.find('div', class_="r-vacancy_createdate") else None
        contact = item.find('div', class_="r-vacancy_contacts_phone").text if item.find('div', class_="r-vacancy_contacts_phone") else None
        email = item.find('div', class_="r-vacancy_contacts_email").text if item.find('div', class_="r-vacancy_contacts_email") else None
        #tags, parents_tags
        all_tags = item.find_all('div', class_="r-vacancy_categories") 
        tag = []
        parent_tags = []
        for t in all_tags:
            tag = [i.text for i in t.find_all('a')]
            parent_tags = [i.text.replace('\n', ' ').replace('(', '').replace(')', '') for i in t.find_all('span')]
        #education, experience, schedule
        add_info = item.find_all('dd')
        education = [add_info[0].text if len(add_info) > 0 else None]
        experience = [add_info[1].text if len(add_info) > 1 else None]
        schedule = [add_info[2].text if len(add_info) > 2 else None]
        #job_info
        job_information = item.find('div', class_="r-vacancy_body_full")
        if job_information:
            job_information.find('div', class_="r-vacancy_company").decompose()
            job_info_dec_company = job_information
            job_info_dec_company.find('div', class_="r-vacancy_categories").decompose()
            job_info = job_info_dec_company
        else:
            job_info = None


        vacancy_data = {
            "name" : title,
            "url" : url,
            "employer" : company,
            "salary" : salary,
            "date_published" : date_published,
            "contact" : contact,
            "email" : email,
            "tags" : tag,
            "parent_tags" : parent_tags,
            "education" : education,
            "experience" : experience,
            "schedule" : schedule,
            "job_info" : job_info
        }
        print(vacancy_data)

        # api_keylinks = [item.get("url") for item in api_data]
        # if data not in api_data:
        #         post_API(data)
        
            


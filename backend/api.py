#!/usr/bin/env python3
"""
License: MIT License
Copyright (c) 2023 Miel Donkers
Very simple HTTP server in python for logging requests
Usage::
    ./server.py [<port>]
"""
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
from newspaper import Article
import json
import openai

import os
from dotenv import load_dotenv
load_dotenv()

# API key
openai.api_key = os.getenv("KEY")

#function that takes in text, key
def generate_summary(input_txt, max_tokens=800):

    #setting up the promt
    summarization_prompt = f"Summarize the following text: '{input_txt}'"

    #setting up the gpt 3.5 API
    summarization_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": summarization_prompt}
        ],
        max_tokens=max_tokens,
        temperature=0,
    )
    #choose the first/best summarization content and store it
    summary = summarization_response.choices[0].message.content

    #return the summary
    return summary

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    
    def do_GET(self):
        # parse the url and extract the query parameters
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)

        # extract the 'url' parameter from the query string
        url = query_params.get('url', [''])[0]

        # If 'url' parameter is provided, scrape the article
        if url:
            article_info = self.scrape_article(url)
            # send JSON response with article information
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(article_info).encode('utf-8'))
        else:
            # if 'url' parameter is not provided, send 400 bad request response
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'Missing "url" parameter in the query string')

    def scrape_article(self, url):
        # create an article object with the provided url
        article = Article(url, language="en")  # assuming english language for simplicity

        # download and parse the article
        article.download()
        article.parse()

        # create a dictionary containing article information
        article_info = {
            "Title": article.title,
            "Author": article.authors,
            "Text": article.text,
            "Summary": generate_summary(article.text, max_tokens=800)
        }

        return article_info

#It will will run the main functions, connect to server
def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
#grabs the text that needs to be summarized


# old code
'''
from http.server import BaseHTTPRequestHandler, HTTPServer
import logging
import json
import webScraper

class S(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        logging.info("GET request,\nPath: %s\nHeaders:\n%s\n", str(self.path), str(self.headers))
        self._set_response()

        self.wfile.write(json.dumps(webScraper.thisdict).encode('utf-8'))

        logging.info(json.dumps({'hello': 'world', 'received': 'ok'}).encode('utf-8'))

    def do_POST(self):
        content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
        post_data = self.rfile.read(content_length) # <--- Gets the data itself
        logging.info("POST request,\nPath: %s\nHeaders:\n%s\n\nBody:\n%s\n",
                str(self.path), str(self.headers), post_data.decode('utf-8'))

        self._set_response()
        self.wfile.write("POST request for {}".format(self.path).encode('utf-8'))

def run(server_class=HTTPServer, handler_class=S, port=8080):
    logging.basicConfig(level=logging.INFO)
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    logging.info('Starting httpd...\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    logging.info('Stopping httpd...\n')

if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
'''
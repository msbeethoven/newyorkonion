from sys import argv 
import re


def tokenize_simple(text):
	return text.lower().split()

def tokenize_regex(text):
	return re.findall(r'\w+',text.lower())

if__name__ == '__main__':

	if len(argv) != 2:
		raise Exception('script requires a file to open')

	script_filename, book_filename = argv 

	with open(boobk_filename, 'r') as infile: 
		file_text = infile.read()

	simple_tokens = tokenize_simple(file_text)

	regex_token = tokenize_regex(file_text)

	print(simple_tokens)
	print(regex_tokens)


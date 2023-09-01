# cd api && source bin/activate && python api.py
import urllib.parse
import flask
from flask import request, jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

def checkurl(url):
    fhd_list=['weebly','duckdns','000webhost','blogspot','wix','sites.google','github.io','firebase','square.site','forms.zoho','wordpress','docs.google','sharepoint','yolasite','myftp.org','godaddy','mailchimp','atwebpages','glitch.me','hpage','herokuapp','website.com','netlify']
    for i in fhd_list:
        if i in url:
            return 1
            break
    else:
        return 0

@app.route('/')
def default():
    try:
        if 'url' in request.args:
            url = urllib.parse.unquote(request.args.get('url'))
            print("the url is:",url)
        else:
            return "Error: No url provided."

        # run the checkUrl function
        print(checkurl(url))
        return jsonify(
            urlStatus=checkurl(url)
        )
    except:
        print("An error has occured")
        return "An error has occured"
 

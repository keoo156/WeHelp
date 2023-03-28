import pymongo
from bson.objectid import ObjectId
from flask import *
from flask_table import Table, Col, LinkCol

app = Flask(
    __name__,
    static_folder="public",
    static_url_path="/"
)
app.secret_key="any string but secret"
#連線到資料庫
client = pymongo.MongoClient("mongodb+srv://root:root123@productsale.fub1w0l.mongodb.net/?retryWrites=true&w=majority")

class Results(Table):
    _id = Col('_id', show=False)
    name = Col('name')
    weight = Col('weight')
    date = Col('date')
    country = Col('country')
    updater = LinkCol('Edit', 'edit', url_kwargs=dict(id='_id'))

#放資料進去
db = client.product
collection = db.productinfo

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/tosen")
def tosen():
    return render_template("sendinfo.html")
@app.route("/finditem")
def finditem():
    return render_template("findrecord.html")

@app.route("/send", methods=["POST"])
def send():
    #從前端接收資料
    name = request.form["name"]
    date = request.form["date"]
    weight = request.form["weight"]
    country = request.form["country"]
    collection = db.productinfo

    result = collection.insert_one({
        "name":name,
        "date":date,
        "weight":weight,
        "country":country
    })
    return render_template("sendinfo.html")
@app.route("/find", methods=["POST"])
def find():

    #從前端傳送資料
    name = request.form["name"]
    date = request.form["date"]
    weight = request.form["weight"]
    country = request.form["country"]
    collection=db.productinfo
    items = collection.find({
        "$or":[
        {"name":name},
        {"date":date},
        {"weight":weight},
        {"country":country}
        ]
    })
    items = list(items)
    if items == []:
        
        return render_template("nofind.html")
             
    else:
        # for doc in items:
        #     print(doc)
        #     name = doc["name"]
        # return render_template("soldinfo.html",names = items)
        table = Results(items)
        table.border = True
        return render_template('soldinfo.html', table=table)

@app.route("/edit/<id>", methods=["GET","POST"])
def edit(id): 
    
    collection=db.productinfo
    item = collection.find_one({
        "_id":ObjectId(id)
    })
    
    return render_template("edititem.html", id = item)
    
@app.route("/update", methods=["POST"])
def update(): 
    id = request.form["id"]
    name = request.form["name"]
    date = request.form["date"]
    weight = request.form["weight"]
    country = request.form["country"]
    
    collection=db.productinfo
    updateitem = collection.update_one({
        "_id":ObjectId(id)
    },{
        "$set":
            {"name":name,
            "date":date,
            "weight":weight,
            "country":country}
        
    })
    
    return render_template("/findrecord.html")

@app.route("/delete", methods=["POST"])
def delete():
    id = request.form["id"]
    collection=db.productinfo
    deleted = collection.delete_one({
        "_id":ObjectId(id)
    })
    
    return render_template("/findrecord.html")

app.run(port = 5500)
#新增資料

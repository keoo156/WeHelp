import pymongo
from bson.objectid import ObjectId
import base64

client = pymongo.MongoClient("mongodb+srv://root:root123@productsale.fub1w0l.mongodb.net/?retryWrites=true&w=majority")
db = client.product
collection = db.productinfo

# results = collection.find({
#     "$or":[
#     {"date":""},
#     {"name":"卡地亞項鍊"},
#     {"_id": '64070d7e81bae00c134af90e'}
#     ]
    
# })

# result = collection.update_one({
#     "_id":ObjectId('64070d7e81bae00c134af90e')
#     },{
#         "$set":{
#             "weight":"3.99"
#         }
#     })
# results = list(results)
# for i in results:
#     print(i["name"])
# print(result)

    
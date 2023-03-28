from flask_table import Table, Col

class Results(Table):
    id = Col('_id', show=False)
    品名 = Col('name')
    重量 = Col('weight')
    日期 = Col('date')
    國籍 = Col('country')

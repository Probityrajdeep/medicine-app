import mysql.connector as sql
con=sql.connect(host="localhost",user="root",password="4010",database="app")
if con.is_connected()==False:
    print("Error in connection")
else:
    print("Connected Successfully")
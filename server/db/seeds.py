# This file should contain records you want created when you run flask db seed.
#
# Example:
# from yourapp.models import User


# initial_user = {
#     'username': 'superadmin'
# }
# if User.find_by_username(initial_user['username']) is None:
#     User(**initial_user).save()

from models import Van
 
van1 = Van({"name": "Trooper", "price": 100.20, "location": "Seattle", "miles": 100, "kitchen": True, "bathroom": False, "sleeps": 3, "seats": 4, "water": True, "length": 15, "imgUrl": "https://fabulousarizona.com/wp-content/uploads/sites/2/2023/03/tommy-camper-vans-phoenix-camper-van-rental-1.jpg", "available": True, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }).save()
van2 = Van({"name": "Blue Beauty", "price": 67.50, "location": "San Francisco, California", "miles": 100, "kitchen": True, "bathroom": True, "sleeps": 4, "seats": 4, "water": True, "length": 15, "imgUrl": "https://lh6.googleusercontent.com/proxy/U9dZP2oorWbxT-wvoN5_6ONUc8PXPsMqpeH83L3yn_HtQeBRrtokTepvq5wbfBFjtvSsZCp1G7LCjZhCzHAFbreZL2Mleuig2qefs5NIIIMzHEJs6qOoy5f2iIfV06Qo2JT-7Q", "available": True, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }).save()
van2 = Van({"name": "Green Goddess", "price": 67.50, "location": "Denver, Colorado", "miles": 75, "kitchen": True, "bathroom": True, "sleeps": 4, "seats": 4, "water": True, "length": 15, "imgUrl": "https://explorist.life/wp-content/uploads/DIY-Campervan-Conversion-1.jpg", "available": True, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }).save()


# Assignment 5 - Kevin Nolan
#  - CS 4720 -
#
# This program sends a request to a url provided by the user
# and receives either a 200 (OK) response from the server or
# an error message 404. It then prints and saves the response to an output file.
#

import requests

userRequest = input("Enter Website: ") # website from user input
userOutput = input("Enter output file: ") # output file from user


# object set to hold HTTP request results
webReq = requests.get(userRequest)

# used to raise exception for a bad HTTP response code 404
webReq.raise_for_status()

# variable to hold response code from server
pageStatus = webReq.status_code

print(pageStatus)  # print code to confirm value

# checks to see if code is 200/success, if so then it will execute the following print out
if pageStatus == 200:
    print("HTTP Request 200 - OK status!")  # prints that url is valid
    responseText = webReq.text  # saves text from response

    # Prints out the HTTP response to the console for the user
    print("******** HTTP Response Output **********")
    print(responseText)
    print("******** End of HTTP Response **********")

    # Saves response text to output file as requested by user
    outputFile = open(userOutput, "w")
    outputFile.write(responseText)
    outputFile.close()

    print("HTTP Response saved as requested to: " + userOutput)

# Close the connection to the server
webReq.close()

This JSONs contains the data for the contact section of the portfolio
The data is an array of objects, each object represents a contact method
Each object has the following properties:
- icon: The icon of the contact method, in the format "icon-library:icon-name"
  You can find a list of all available icons at https://iconify.design/icon-sets/
- name: the name of your contact method
- url: the url of your contact method
- color: The color of the contact method, in any valid CSS color format
The data is used by the contact component to render the contact methods
You can add or remove contact methods as needed
The contact methods are rendered in the order they appear in the array
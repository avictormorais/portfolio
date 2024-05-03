This JSONs contains the data for the projects section of the portfolio
The data is an array of objects, each object represents a project
Each object has the following properties:
- icon: a file path to your icon image, i recommend to create a folder for each project in the public folder.
- preview: a file path to your preview image, i recommend to create a folder for each project in the public folder.
- name: your project name.
- description
- descriptionPt: the portuguese version of the description.
- technologies: a list of technologies, with:
  - icon: The icon of the skill, in the format "icon-library:icon-name"
  - color: The color of the skill, in any valid CSS color format
- github: non nescessary, the project repo URL
- deploy: non nescessary, the project deploy url
* if there isn't a github or deploy link, a "coming soon..." text will be created.

* note: the firt 3 projects will be show as a main project in the section
* the others projects will be in a "show more" component.
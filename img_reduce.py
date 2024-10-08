#/workspaces/portfolio/src/images/coburger.jpg
#/workspaces/portfolio/src/images/desert sunset7_Tatooine.png
from PIL import Image

foo = Image.open('/workspaces/portfolio/src/images/desert sunset7_Tatooine.png')  # My image is a 200x374 jpeg that is 102kb large
foo.size  # (200, 374)
# downsize the image with an ANTIALIAS filter (gives the highest quality)
foo = foo.resize((1505,1006)) 
foo.save('/workspaces/portfolio/src/images/desert sunset7_Tatooine.png', optimize=True, quality=95)
import DomToImage from 'dom-to-image'

const mockRecipes = [
  {
    src: "https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png",
    alt: "Burger",
    height: 100,
    width: 100
  },
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/028/615/354/small_2x/sake-nigiri-sushi-isolated-on-transparent-background-generative-ai-png.png",
    alt: "sushi",
    height: 100,
    width: 100
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/024/586/222/non_2x/pizza-with-ai-generated-free-png.png",
    alt: "pizza",
    height: 100,
    width: 100
  },
]

const imageDom = []

export async function GET() {
  try {
    if (mockRecipes) {
      DomToImage.toPng()
    }
  } catch (error) {
    
  }
}
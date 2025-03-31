import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);


export async function fakeFetch() {
    await new Promise(resolve => {setTimeout(resolve,3000)});
    return (
        'Fake AI fetch simulation. Start by patting the chicken breasts dry and seasoning both sides with paprika, oregano, salt, and black pepper. Heat a tablespoon of olive oil in a skillet over medium heat and cook the chicken for about five to six minutes per side until golden brown and fully cooked. Once done, remove the chicken from the pan and set it aside. In the same pan, reduce the heat to low and melt two tablespoons of butter. Add minced garlic and sauté for about 30 seconds until fragrant. Next, add the broccoli, sliced carrots, bell pepper, and zucchini to the pan. Season the vegetables with salt, pepper, and garlic powder, then sauté for about five minutes until they are tender but still slightly crisp.')
}

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });
        return (
            response.choices[0].message.content
        )
    } catch (err) {
        console.error(err.message)
    }
}

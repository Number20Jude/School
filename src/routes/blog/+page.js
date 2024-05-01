export async function load({fetch}){
    const endpoint = 
    'https://public-api.wordpress.com/rest/v1.1/sites/jcyarger.wordpress.com/posts/' 

    const response = await fetch(endpoint)
    const posts = await response.json()

    return {
        posts: posts.posts,
    }
}

//'https://public-api.wordpress.com/rest/v1.1/sites/jcyarger.wordpress.com/posts/'  
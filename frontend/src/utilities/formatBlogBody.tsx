export function formatBlogBody(input: string) {
    return input.split('. ', 1)[0]
}
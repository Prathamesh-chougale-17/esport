import { client } from "./client";
import { groq } from "next-sanity";
import { buildQuery } from "./buildQuery";

export interface Games {
    title: string;
    image: string;
    slug: string;
}

// export async function getProject({ query, category, page }: GetResourcesParams): Promise<Project[]> {

//     return client.fetch(groq`${buildQuery({
//         type: 'projects',
//         query,
//         category,
//         page: parseInt(page),
//     })}{
//         title,
//         _id,
//         githubLink,
//         subtitle,
//         "image": projectImage.asset->url,
//         views,
//         "slug":slug.current,
//         category,
//         description,
//         techStack,
//         liveLink
//       }`
//     )
// }

// export async function getProjectBySlug(slug: string): Promise<Project> {
//     return client.fetch(groq`*[_type == "projects" && slug.current == "${slug}"][0]{
//         title,
//         _id,
//         githubLink,
//         subtitle,
//         "image": projectImage.asset->url,
//         views,
//         "slug":slug.current,
//         category,
//         description,
//         techStack,
//         liveLink
//       }`,
//         { slug }
//     )
// }

export async function getGames(): Promise<Games[]> {
    return client.fetch(groq`*[_type == "events"]{
        title,
        "slug":slug.current,
          "image": games.asset->url
      }`)
}

export async function getGamesBySlug(slug: string): Promise<Games> {
    return client.fetch(groq`*[_type == "events" && slug.current == "${slug}"][0]{
        title,
        "slug":slug.current,
          "image": games.asset->url
      }`,
        { slug }
    )
}
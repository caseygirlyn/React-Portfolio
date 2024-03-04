import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import projects from "../projects.json";

const Slug = () => {
    const { slug } = useParams();
    const item = projects.find((x) => x.slug === slug)

    return (
        <div className="container p-4 text-center project-container">
            <h2 className='primary-color'>{item.name}</h2>
            <p className='fst-italic'>{item.tech}</p>
            { item.description ? <p>{item.description}</p> : ''}
            <p className='mb-4'>
                <NavLink to={item.url} className="btn btn-secondary btn-lg bg-primary-color border-0 mx-1" role="button" target="_blank" rel="nofollow"><i className="bi bi-globe text-white me-2"></i>Live Link</NavLink>
                { item.githubRepo ? <NavLink to={item.githubRepo} className="btn btn-secondary btn-lg  border-0 mx-1" role="button" target="_blank" rel="nofollow"><i className="bi bi-github text-white me-2"></i>GitHub Repo</NavLink> : ''}
            </p>
            <div className="card border-1 rounded-0 shadow m-auto">
                <img src={item.image} title={item.name} className="w-auto" />
            </div>

        </div>
    )
}

export default Slug

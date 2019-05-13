export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd9bc61855b505e4b34a5c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fq5xrw4i',
                  apiId: 'fc8148dc-4e34-4b12-b681-a4b4c16b6261'
                },
                {
                  buildHookId: '5cd9bc61f1ac9be4c4b9101b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zvrjr17d',
                  apiId: 'a3d9d607-54a6-45d1-a827-8652572ca7e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Nejurgis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-zvrjr17d.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

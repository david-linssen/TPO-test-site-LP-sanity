export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61854d03d30d37097b7c8e7f',
                  title: 'Sanity Studio',
                  name: 'tpo-test-site-lp-sanity-studio',
                  apiId: '4451a6d5-f4e5-4f89-b267-8a7747bcb52d'
                },
                {
                  buildHookId: '61854d0360617f00a3932a52',
                  title: 'Landing pages Website',
                  name: 'tpo-test-site-lp-sanity',
                  apiId: '784927dc-8403-47c2-b83e-99ce5a3c144c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/david-linssen/TPO-test-site-LP-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tpo-test-site-lp-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

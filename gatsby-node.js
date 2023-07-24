/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
      },
    },
  })
}

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   createNodeId,
//   getCache,
// }) => {
//   if (node.internal.type === "MarkdownRemark") {
//     for (let i = 0; i < node.frontmatter["Hero Image"].length; i++) {
//       const name = node.frontmatter["Hero Image"][i].name

//       if (!name) {
//         continue
//       }

//       if (name.startsWith("http")) {
//         const fileNode = await createRemoteFileNode({
//           url: name,
//           parentNodeId: node.id,
//           createNode,
//           createNodeId,
//           getCache,
//         })

//         if (fileNode) {
//           node.frontmatter["Hero Image"][i].remoteImage___NODE = fileNode.id
//         }
//       }
//     }
//   }
// }

//

// https://github.com/dearlsh94/WeeZip/tree/master

// const createPostPage = ({ createPage, query }) => {
//   const component = require.resolve("./src/templates/Post-template.js")
//   query.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
//     createPage({
//       path: node.fields.postSlug,
//       component,
//       context: {
//         postSlug: node.fields.postSlug,
//         nextSlug: next?.fields.postSlug ?? "",
//         prevSlug: previous?.fields.postSlug ?? "",
//       },
//     })
//   })
// }

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions
//   const query = await graphql(`
//     {
//       allMarkdownRemark(
//         filter: { fields: { postSlug: { ne: null } } }
//         sort: { frontmatter: { createdAt: DESC } }
//       ) {
//         edges {
//           node {
//             fields {
//               postSlug
//             }
//             id
//             excerpt(pruneLength: 200, truncate: true)
//             frontmatter {
//               createdAt
//               title
//               emoji
//               categories
//               tags
//             }
//           }
//           next {
//             fields {
//               postSlug
//             }
//           }
//           previous {
//             fields {
//               postSlug
//             }
//           }
//         }
//       }
//     }
//   `)

//   createPostPage({ createPage, query })
// }

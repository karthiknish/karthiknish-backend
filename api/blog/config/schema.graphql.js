const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  query: `blogBySlug(id:ID slug:String):Blog`,
  resolver: {
    Query: {
      blogBySlug: {
        resolverOf: "Blog.findOne",
        async resolver(_, { slug }) {
          const entity = await strapi.services.blog.findOne({ slug });
          return sanitizeEntity(entity, { model: strapi.models.blog });
        },
      },
    },
  },
};

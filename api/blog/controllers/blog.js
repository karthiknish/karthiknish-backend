"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services.blog.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.blog });
  },
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.blog.search(ctx.query);
    } else {
      entities = await strapi.services.blog.find(ctx.query);
    }

    return entities.map((entity) => {
      const blog = sanitizeEntity(entity, {
        model: strapi.models.blog,
      });
      if (blog.body) {
        delete blog.body;
      }
      return blog;
    });
  },
};

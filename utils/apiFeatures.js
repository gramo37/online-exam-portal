class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // Searches for product by the keyword entered
  search(role) {
    const keyword = this.queryStr.keyword
      ? {
          // If this.queryStr.keyword exists then keyword = { name:{ $regex: this.queryStr.keyword, $options: "i" } }
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          }
        }
      : {};

    this.query = this.query.find({ ...keyword, role: role }); // Why find() is repeated ?  find() method can be repeated if needed

    return this;
  }

  pagination() {
    const currentPage = Number(this.queryStr.page) || 1;
    const resultPerPage = Number(this.queryStr.productsPerPage) || 4;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip); // Show "resultPerPage" number of products on 1 page and skip to the next products according to the page number
    return this;
  }
}

module.exports = ApiFeatures;

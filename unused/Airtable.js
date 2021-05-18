import Airtable from "airtable"
export default new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_ALLY_BASE_ID);

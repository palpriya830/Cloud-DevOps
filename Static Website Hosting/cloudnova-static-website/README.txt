CloudNova - AWS S3 Static Website Hosting Practice

Files:
- index.html: main landing page (S3 index document)
- error.html: custom error page (S3 error document)
- style.css: website styling
- script.js: small interactive navigation and contact demo

Before uploading:
1. Extract this ZIP file.
2. Keep all four website files in the same folder.
3. Upload the files themselves to the root of your S3 bucket (not the containing folder).
4. In S3 > Properties > Static website hosting, set:
   Index document: index.html
   Error document: error.html
5. Configure public read access and the bucket policy only after reviewing the assignment's public-hosting requirement.

This is a static demo site. It does not contain a backend or collect contact information.

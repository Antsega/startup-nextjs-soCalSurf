## 1. Running the Application Locally

To run the application in your local environment, you need to start the Flask server using the following command:

> `npm run dev`

---

---

## 2. Building and Testing the Docker Image

Once you have a Dockerfile, you can build an image and then test it:

**Step 2.1: Building the Docker Image**

> `docker build -t so_cal_surf .`

**Step 2.2: Running the Docker Container**

> `docker run -p 3000:3000 so_cal_surf`

---

## 3. Deployment Steps

To deploy the Docker image to Google Cloud Run, follow these steps:

**Step 3.1: Configuring Docker with GCloud**

> `gcloud auth configure-docker`

**Step 3.2: Tagging the Docker Image**

Replace `[YOUR-PROJECT-ID]` with your Google Cloud project ID.

> `docker tag [image_name] gcr.io/[YOUR-PROJECT-ID]/[root_dir]`
> `docker tag so_cal_surf gcr.io/socalsurf/startup-nextjs-socal-surf`


**Step 3.3: Pushing the Docker Image**

> `docker push gcr.io/[YOUR-PROJECT-ID]/[root_dir]`

**Step 3.4: Deploying to Google Cloud Run**

Replace `SERVICE_NAME`, `PROJECT_ID`, `IMAGE_NAME`, and `REGION_NAME` with your service name, project ID, image name, and region respectively. For example:

> `gcloud run deploy [SERVICE_NAME] --image gcr.io/[PROJECT_ID]/[ROOT_DIR] --platform managed --region [REGION_NAME] --project [PROJECT_ID]`
> `gcloud run deploy nextjs-socal-surf --image gcr.io/socalsurf/startup-nextjs-socal-surf --platform managed --region us-central1 --project socalsurf`

**Step 3.5: Service 'containerregistry.googleapis.com' is not enabled for consumer 'project [ERROR]**

Search for `Google Container Registry API` and __enable__ on GCP console

---

## 4. Implementing CI/CD

You can automate the build and deployment process with Google Cloud Build.

**Step 4.1: Enable API**
Cloud Build API

**Step 4.1: Creating a Build Trigger**

Create a build trigger as per the instructions provided [here](https://cloud.google.com/build/docs/automating-builds/create-manage-triggers).

**Step 4.2: Adding a cloudbuild.yaml File**

Add a `cloudbuild.yaml` file to your GitHub repository, which specifies the build steps. This file automates the following:

- Building a Docker image from your Dockerfile.
- Pushing the Docker image to the Google Container Registry.
- Deploying the Docker image to Google Cloud Run.

Replace `my-service` with your actual service name and `us-central1` with your desired region. The `$PROJECT_ID` will be automatically replaced by your GCP project ID.

---

Please refer to the relevant documentation for more detailed steps and troubleshooting. If you encounter issues or have further questions, feel free to raise an issue in this repository.

Helpful Links
Cloud Build Logs
https://console.cloud.google.com/cloud-build/builds?_ga=2.14484660.2062548505.1685055387-541186574.1670604918&_gac=1.162001102.1685055996.Cj0KCQjwjryjBhD0ARIsAMLvnF8Kadh5r1uNcQIn4c_KN-lIMVPhHiKCX9nrzrIZvjbbiCoUAeeHaZIaAgWWEALw_wcB
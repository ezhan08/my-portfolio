/**
 * LinkedIn Data Extraction Script
 * 
 * Run this in your browser console while on your LinkedIn profile
 * Copy the output and paste it to update the portfolio
 */

function extractLinkedInData() {
  const data = {
    profile: {},
    experience: [],
    education: [],
    certifications: [],
    skills: [],
    posts: []
  };

  // Extract Profile Information
  try {
    const nameEl = document.querySelector('h1.text-heading-xlarge');
    const headlineEl = document.querySelector('.text-body-medium.break-words');
    const locationEl = document.querySelector('.text-body-small.inline.t-black--light.break-words');
    const profileImgEl = document.querySelector('img.pv-top-card-profile-picture__image, img.profile-photo-edit__preview');
    const aboutEl = document.querySelector('#about ~ .pvs-list__outer-container .inline-show-more-text');

    data.profile = {
      name: nameEl?.textContent?.trim() || '',
      headline: headlineEl?.textContent?.trim() || '',
      location: locationEl?.textContent?.trim() || '',
      profileImageUrl: profileImgEl?.src || profileImgEl?.getAttribute('src') || '',
      summary: aboutEl?.textContent?.trim() || ''
    };
  } catch (e) {
    console.error('Error extracting profile:', e);
  }

  // Extract Experience
  try {
    const experienceSection = document.querySelector('#experience ~ .pvs-list__outer-container');
    if (experienceSection) {
      const experienceItems = experienceSection.querySelectorAll('.pvs-list__outer-container > li');
      experienceItems.forEach(item => {
        const titleEl = item.querySelector('.mr1.t-bold span[aria-hidden="true"]');
        const companyEl = item.querySelector('.t-14.t-normal span[aria-hidden="true"]');
        const dateEl = item.querySelector('.t-14.t-normal.t-black--light span[aria-hidden="true"]');
        const locationEl = item.querySelector('.t-14.t-normal.t-black--light span[aria-hidden="true"]:last-of-type');
        const descriptionEl = item.querySelector('.pvs-list__outer-container .inline-show-more-text');

        if (titleEl) {
          data.experience.push({
            role: titleEl.textContent.trim(),
            company: companyEl?.textContent.trim() || '',
            period: dateEl?.textContent.trim() || '',
            location: locationEl?.textContent.trim() || '',
            description: descriptionEl?.textContent.trim() || ''
          });
        }
      });
    }
  } catch (e) {
    console.error('Error extracting experience:', e);
  }

  // Extract Education
  try {
    const educationSection = document.querySelector('#education ~ .pvs-list__outer-container');
    if (educationSection) {
      const educationItems = educationSection.querySelectorAll('.pvs-list__outer-container > li');
      educationItems.forEach(item => {
        const schoolEl = item.querySelector('.mr1.t-bold span[aria-hidden="true"]');
        const degreeEl = item.querySelector('.t-14.t-normal span[aria-hidden="true"]');
        const dateEl = item.querySelector('.t-14.t-normal.t-black--light span[aria-hidden="true"]');
        const gpaEl = item.querySelector('.pvs-list__outer-container .t-14.t-normal span[aria-hidden="true"]');

        if (schoolEl) {
          data.education.push({
            school: schoolEl.textContent.trim(),
            degree: degreeEl?.textContent.trim() || '',
            timeline: dateEl?.textContent.trim() || '',
            gpa: gpaEl?.textContent.trim() || '',
            location: ''
          });
        }
      });
    }
  } catch (e) {
    console.error('Error extracting education:', e);
  }

  // Extract Certifications
  try {
    const certSection = document.querySelector('#licenses_and_certifications ~ .pvs-list__outer-container, #certifications ~ .pvs-list__outer-container');
    if (certSection) {
      const certItems = certSection.querySelectorAll('.pvs-list__outer-container > li');
      certItems.forEach(item => {
        const titleEl = item.querySelector('.mr1.t-bold span[aria-hidden="true"]');
        const issuerEl = item.querySelector('.t-14.t-normal span[aria-hidden="true"]');
        const dateEl = item.querySelector('.t-14.t-normal.t-black--light span[aria-hidden="true"]');
        const credentialEl = item.querySelector('.pvs-list__outer-container .t-14.t-normal span[aria-hidden="true"]');

        if (titleEl) {
          data.certifications.push({
            title: titleEl.textContent.trim(),
            issuer: issuerEl?.textContent.trim() || '',
            issued: dateEl?.textContent.trim() || '',
            credentialId: credentialEl?.textContent.trim() || ''
          });
        }
      });
    }
  } catch (e) {
    console.error('Error extracting certifications:', e);
  }

  // Extract Skills
  try {
    const skillsSection = document.querySelector('#skills ~ .pvs-list__outer-container');
    if (skillsSection) {
      const skillItems = skillsSection.querySelectorAll('.mr1.t-bold span[aria-hidden="true"]');
      skillItems.forEach(item => {
        data.skills.push(item.textContent.trim());
      });
    }
  } catch (e) {
    console.error('Error extracting skills:', e);
  }

  return data;
}

// Run extraction
const linkedInData = extractLinkedInData();
console.log('=== LINKEDIN DATA ===');
console.log(JSON.stringify(linkedInData, null, 2));
console.log('=== COPY THE ABOVE JSON ===');

// Also log profile image URL separately for easy copying
if (linkedInData.profile.profileImageUrl) {
  console.log('\n=== PROFILE IMAGE URL ===');
  console.log(linkedInData.profile.profileImageUrl);
}


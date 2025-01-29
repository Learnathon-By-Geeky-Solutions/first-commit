# Pages Documentation

## Login & Registration Pages (/login, /register)
### Purpose
Allows users, doctors, and hospital admins to access the platform.

### Contents
- Login form (email/phone, password, select role field, "Forgot Password?" link).
- Registration form with role selection (User/Doctor/Hospital Admin).
- Email/phone verification (if required).

## Home Pages (/)
### Purpose
Provides an overview of the platform and guides users to key features.

### Contents
- Hero section with a brief introduction to DocNest.
- Search bar to find doctors/hospitals by name, location, specialization, etc.
- Featured doctors or hospitals.
- Call-to-action buttons (e.g., "Find Hospital," "Find a Doctor").

## Search & Results Page (/search)
### Purpose
Displays search results based on user queries.

### Contents
- Filters for refining results (e.g., by specialization, gender, city). Filter by distance(optional).
- List of doctors or hospitals matching the search criteria.
- Brief details of each doctor/hospital (name, specialization, location).
- "View Details" button for more info on a selected doctor/hospital.

## Doctor Profile Page (/doctor/:id)
### Purpose
Shows detailed information about a specific doctor.

### Contents
- Doctor’s name, photo, about, specialization, Degree and experience.
- Work locations (hospital names, addresses, seating times).
- Available appointment slots with a "Book Appointment" button.
- Contact details (if allowed).

## Hospital Profile Page (/hospital/:id)
### Purpose
Shows detailed information about a specific hospital.

### Contents
- Hospital name, logo, contact, address and about.
- List of available doctors with specializations (filter by).

## User Dashboard (/dashboard)
### Purpose
A personal space where users can manage their appointments and profile.

### Contents
- User profile info (name, email, phone number).
- Upcoming and past appointments.
- Option to cancel or reschedule appointments.
- Notifications (appointment reminders, hospital updates). (optional)

## Doctor Dashboard (/doctor-dashboard)
### Purpose
Allows doctors to manage their appointments and schedules.

### Contents
- Doctor’s profile details (editable).
- Aceept or reject hospital request (list of request).
- List of upcoming appointments.
- Schedule management (set available slots).
- Notifications. (optional)

## Hospital Admin Dashboard (/hospital-dashboard)
### Purpose
Allows hospitals to manage their listed doctors and appointments.

### Contents
- Hospital profile details (editable).
- List of registered doctors at the hospital.
- Option to invite new doctors to join.
- Appointment list (current).

## About us (/about)
### Purpose
Provides information about DocNest.

### Contents
- Brief history and mission of the platform.
- Team details (if applicable).
- Contact information.

## Contact Us Page (/contact)
### Purpose
Allows users to reach out for support or inquiries.

### Contents
- Contact form (name, email, message).
- Support email and phone number.
- FAQ section (optional).

## Terms & Privacy Policy Pages (/terms, /privacy)
### Purpose
Legal pages explaining the terms of service and privacy policy.

### Contents

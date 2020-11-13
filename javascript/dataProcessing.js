export function processDateIntoNumbers() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let createdAtElement = user.querySelector('#userCreatedAt');
        let createdAt = createdAtElement.textContent;
        let createdAtNumbers = parseInt(createdAt.replace(/[T+Z+\:+\-*$]/mig, ""));

        createdAtElement.setAttribute("registerdate", createdAtNumbers);
    });
    
    return users;
}
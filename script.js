function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.style.display = 'block';
}

// Menampilkan Home secara default
showSection('home');

function uploadTask() {
    const taskName = document.getElementById('taskName').value;
    const lecturerName = document.getElementById('lecturerName').value;
    const pdfFile = document.getElementById('pdfFile').files[0];
    const youtubeLink = document.getElementById('youtubeLink').value;

    if (taskName && lecturerName && pdfFile) {
        const taskContainer = document.getElementById('taskContainer');
        
        const li = document.createElement('li');
        li.innerHTML = `<strong>${taskName}</strong> - ${lecturerName} <br>
                        <a href="${URL.createObjectURL(pdfFile)}" download="${pdfFile.name}">Download PDF</a> |
                        <a href="${youtubeLink}" target="_blank">YouTube Link</a>`;
        
        taskContainer.appendChild(li);

        // Clear the input fields
        document.getElementById('taskName').value = '';
        document.getElementById('lecturerName').value = '';
        document.getElementById('pdfFile').value = '';
        document.getElementById('youtubeLink').value = '';
    } else {
        alert("Tolong lengkapi semua data!");
    }
}

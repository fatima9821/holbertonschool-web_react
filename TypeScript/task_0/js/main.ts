interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Création de deux étudiants
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Tableau des étudiants
const studentsList: Student[] = [student1, student2];

// Fonction pour créer et afficher le tableau
function renderTable() {
    // Création de l'élément table
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Pour chaque étudiant, ajouter une ligne dans la table
    studentsList.forEach((student) => {
        const row = document.createElement('tr');

        // Créer les cellules pour le prénom et la localisation
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        // Ajouter les cellules à la ligne
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        // Ajouter la ligne au corps de la table
        tableBody.appendChild(row);
    });

    // Ajouter le corps de la table à la table
    table.appendChild(tableBody);

    // Ajouter la table au document HTML (par exemple dans un élément avec l'id 'table-container')
    document.body.appendChild(table);
}

// Appeler la fonction pour afficher la table
renderTable();


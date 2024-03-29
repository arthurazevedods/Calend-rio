
// Carrega o calendário
window.onload = function () {
    generateCalendar();
};

// Gerar Calendário
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const calendarHeader = document.getElementById('calendar-header');
    const calendarDaysWeek = document.getElementById('calendar-daysweek');

    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const totalDays = lastDayOfMonth.getDate();

    // Adiciona o mês e o ano ao cabeçalho
    const monthYearText = document.querySelector(".month-year-text");
    monthYearText.textContent = `${getMonthName(month)} ${year}`;


    // Adiciona os nomes dos dias da semana no topo do calendário
    const daysOfWeekElement = document.createElement('div');
    daysOfWeekElement.className = "calendar-days-of-week-names";
    for (let dayOfWeek of daysOfWeek) {
        let dayName = document.createElement("div");
        dayName.className = "calendar-day-name";
        dayName.textContent = dayOfWeek;
        daysOfWeekElement.appendChild(dayName);
    }
    calendarDaysWeek.appendChild(daysOfWeekElement);

    // Calcula o índice do primeiro dia do mês na semana
    const firstDayOfWeekIndex = firstDayOfMonth.getDay();

    // Adiciona elementos div em branco para os dias antes do primeiro dia do mês
    for (let i = 0; i < firstDayOfWeekIndex; i++) {
        let blankDay = document.createElement("div");
        blankDay.className = "calendar-day-blank";
        calendar.appendChild(blankDay);
    }

    // Adiciona elementos div para cada dia do mês
    for (let day = 1; day <= totalDays; day++) {
        let daySquare = document.createElement("div");
        daySquare.className = "calendar-day";
        daySquare.id = `day-${day}`;

        let dayNumber = document.createElement("span");
        dayNumber.className = "day-number";
        dayNumber.textContent = day;
        daySquare.appendChild(dayNumber);

        const numberOfTasks = document.createElement("span");
        numberOfTasks.className = "numberOfTasks";
        numberOfTasks.textContent = "0"; // Inicializa o contador como 0
        daySquare.appendChild(numberOfTasks);

        // Verifica se o dia é domingo (índice 0 no objeto Date)
        if (new Date(year, month, day).getDay() === 0) {
            daySquare.classList.add('sunday'); // Adiciona a classe CSS para domingos
        }

        calendar.appendChild(daySquare);
    }
}

// Função auxiliar para obter o nome do mês a partir do número do mês
function getMonthName(month) {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return monthNames[month];
}



// Função para mostrar o modal de adicionar tarefa
function showAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'block';
}

// Função para fechar o modal de adicionar tarefa
function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

// Função para deletar uma tarefa
function deleteTask(taskElement) {
    if (confirm("Tem certeza de que deseja excluir esta tarefa?")) {
        taskElement.parentNode.removeChild(taskElement);
    }
}

// Editar tarefa
function editTask(taskElement) {
    const newTaskDesc = prompt("Edite sua tarefa:", taskElement.textContent);
    // Verifica se o usuário inseriu uma nova descrição de tarefa e não está vazia
    if (newTaskDesc !== null & newTaskDesc.trim() !== "") {
        taskElement.textContent = newTaskDesc;// Atualiza o conteúdo textual do elemento da tarefa com a nova descrição

    }
}




const arrowRight = document.getElementById("arrowRight");

arrowRight.addEventListener("click", ()=>{
    console.log("oahahd");
})

const arrowLeft = document.getElementById("arrowLeft");

arrowLeft.addEventListener("click", ()=>{
    console.log("oahahd");
})
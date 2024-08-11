document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const numPeople = document.getElementById('num-people').value;
        const contactName = document.getElementById('contact-name').value;
        const contactPhone = document.getElementById('contact-phone').value;
        const joinLand = document.querySelector('input[name="join-land"]').checked;

        if (!contactName.trim()) {
            alert('กรุณากรอกชื่อผู้ติดต่อ');
            return;
        }
        if (!contactPhone.trim()) {
            alert('กรุณากรอกเบอร์ผู้ติดต่อ');
            return;
        }

        const numPeopleValue = parseInt(numPeople, 10);
        if (isNaN(numPeopleValue) || numPeopleValue < 1 || numPeopleValue > 15) {
            alert('จำนวนผู้ร่วมเดินทางต้องเป็นตัวเลขระหว่าง 1 ถึง 15');
            return;
        }

        if (joinLand) {
            const confirmJoinLand = confirm('คุณต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่?');
            if (confirmJoinLand) {
                alert('คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง');
            }
        }

        form.submit();
        window.location.href = 'index.html'; // optional
    });
});

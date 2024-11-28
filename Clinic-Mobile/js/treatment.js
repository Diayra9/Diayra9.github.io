document.addEventListener('DOMContentLoaded', function () {
    // Menampilkan modal ketika input diklik
    document.getElementById('stateInput').addEventListener('click', function () {
        document.getElementById('treatmentModal').style.display = 'block';

        // Mengecek apakah modal muncul dan menambahkan kelas 'no-scroll' ke body
        const treatmentModal = document.getElementById('treatmentModal');
        if (treatmentModal.style.display === 'block') {
            document.body.classList.add('no-scroll');
        }
    });

    // Menutup modal ketika tombol close diklik
    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('treatmentModal').style.display = 'none';

        // Menghapus kelas 'no-scroll' dari body setelah modal ditutup
        document.body.classList.remove('no-scroll');
    });

    // Menutup modal ketika klik di luar modal
    window.onclick = function (event) {
        const modal = document.getElementById('treatmentModal');
        if (event.target === modal) {
            modal.style.display = 'none';

            // Menghapus kelas 'no-scroll' ketika modal ditutup
            document.body.classList.remove('no-scroll');
        }
    };

    // Memilih treatment dan mengisi input
    document.querySelectorAll('.treatment-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const treatmentId = this.getAttribute('data-id');
            const treatmentName = this.getAttribute('data-name');

            document.getElementById('stateInput').value = treatmentName;
            document.getElementById('treatmentId').value = treatmentId;

            document.getElementById('treatmentModal').style.display = 'none';

            // Menghapus kelas 'no-scroll' setelah modal ditutup
            document.body.classList.remove('no-scroll');
        });
    });
});

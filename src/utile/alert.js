import Swal from 'sweetalert2'

export function SweetAlert(title,text,icon) {

  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
      )
    }
  })

}
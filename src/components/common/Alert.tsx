import Swal, { SweetAlertOptions } from 'sweetalert2'

export const Alert = ({
  icon = 'question',
  input = 'text',
  position = 'top-end',
  showConfirmButton = false,
  title,
  text,
  timer,
}: SweetAlertOptions) => {
  Swal.fire({
    icon,
    input,
    position,
    title,
    text,
    showConfirmButton,
    timer,
  })
}

export const useConfirmation =
  ({
    icon = 'question',
    position = 'top-end',
    title = '',
    timer = 10000,
    text = '',
  }: SweetAlertOptions) =>
  async () => {
    const { isConfirmed } = await Swal.fire({
      icon,
      timer,
      position,
      title,
      text,
      showCancelButton: true,
      confirmButtonText: 'Yes, please!',
      cancelButtonText: 'No, cancel!',
    })
    return isConfirmed
  }

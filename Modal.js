let Modal = {
  render(obj){
    p_photo.innerHTML = `<img src='${obj.photo}'>`;
    p_id.innerHTML = obj.id
    p_name.innerHTML = obj.name
    p_username.innerHTML = obj.username
    p_directIndications.innerHTML = obj.directIndications
    p_activeDirectReferrals.innerHTML = obj.activeDirectReferrals
    p_sumAllNetwork.innerHTML = obj.sumAllNetwork
    p_sumActivated.innerHTML = obj.sumActivated
    p_createdAt.innerHTML = obj.createdAt
    p_activatedAt.innerHTML = obj.activatedAt
    p_email.innerHTML = obj.email
  }
}

export default Modal
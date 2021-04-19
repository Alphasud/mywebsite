function mailManagement(mail, message) {
  mail.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('c.denneulin@gmail.com');
      message.forEach((element) => (element.style.opacity = '1'));
      message.forEach((element) => (element.style.height = 'auto'));
      setTimeout(function () {
        message.forEach((element) => (element.style.opacity = '0'));
        message.forEach((element) => (element.style.height = '0'));
      }, 3000);
    });
  });
}

export { mailManagement };

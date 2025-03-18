function countTime(targetDate) {
    console.log(`Час відраховується до ${targetDate.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}`)
    const timer = setInterval(() => {
        const timeLeft = targetDate - new Date();
      if(timeLeft > 0){
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.querySelector('[data-value="days"]').textContent = `${String(days).padStart(2, '0')}`;
        document.querySelector('[data-value="hours"]').textContent = `${String(hours).padStart(2, '0')}`;
        document.querySelector('[data-value="mins"]').textContent = `${String(mins).padStart(2, '0')}`;
        document.querySelector('[data-value="secs"]').textContent = `${String(secs).padStart(2, '0')}`;

      } else if(timeLeft <=0){
        clearInterval(timer);
        console.log('Times up');
        document.querySelector('[data-value="days"]').textContent = `00`;
        document.querySelector('[data-value="hours"]').textContent = `00`;
        document.querySelector('[data-value="mins"]').textContent = `00`;
        document.querySelector('[data-value="secs"]').textContent = `00`;
        return;
      };
    }, 1000)
  } 

  countTime(new Date(2025, 4, 25));
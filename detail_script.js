const writeReviewBtn = document.querySelector('#write-review-btn');
const reviewForm = document.querySelector('#review-form');
const reviewsContainer = document.querySelector('.reviews');

writeReviewBtn.addEventListener('click', () => {
    reviewForm.classList.toggle('hidden');
});

reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = reviewForm.querySelector('#name').value;
    const content = reviewForm.querySelector('#content').value;

    if (name.length > 0 && content.length > 0) {
        const reviewHTML = `
            <li>
                <div class="review">
                    <h3>${name}님의 후기</h3>
                    <p>${content}</p>
                    <span>작성일: 2024년 5월 28일</span>
                </div>
            </li>
        `;

        reviewsContainer.insertAdjacentHTML('beforeend', reviewHTML);
        reviewForm.reset();
        reviewForm.classList.toggle('hidden');
    } else {
        alert('이름과 내용을 입력해주세요.');
    }
});

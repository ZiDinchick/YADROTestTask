import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Player.scss';

function Player({ user }) {
  const [comments, setComments] = useState([
    { id: 1, name: 'Женя', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem culpa amet excepturi sit, dolorum rerum ab enim dolore ipsum aspernatur dolorem inventore doloremque quos debitis adipisci dolor minus exercitationem eius.', likes: 100 },
    { id: 2, name: 'Женя', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem culpa amet excepturi sit, dolorum rerum ab enim dolore ipsum aspernatur dolorem inventore doloremque quos debitis adipisci dolor minus exercitationem eius.', likes: 0 },
    { id: 3, name: 'Женя', text: 'Lorem ipsum dolor sit.', likes: 90 }
  ]);
  const [newComment, setNewComment] = useState('');
  const [editName, setEditName] = useState(false);
  const [chatName, setChatName] = useState(user.firstName);
  const [likedComments, setLikedComments] = useState([]);
  const [isInput, setIsInput] = useState(false);

  const handleLike = (id) => {
    if (likedComments.includes(id)) {
      setComments(comments.map(comment =>
        comment.id === id ? { ...comment, likes: comment.likes - 1 } : comment
      ));
      setLikedComments(likedComments.filter(likeId => likeId !== id));
    } else {
      setComments(comments.map(comment =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      ));
      setLikedComments([...likedComments, id]);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, name: chatName, text: newComment, likes: 0 }]);
      setNewComment('');
    }
  };

  const handleNameEdit = () => {
    setEditName(!editName);
  };

  const handleNameChange = (e) => {
    setChatName(e.target.value);
  };

  const handleButtonClick = () => {
    setIsInput(true);
  };

  return (
    <>
      <section className='Pleyr'>
        <div className="container">
          <div className="video">
            <ReactPlayer url='https://youtu.be/lIudqbvG8Hc' controls={true} width='100%' height='100%'/>
          </div>
          <div className="chats">
            <div className="chat__header">
              <input className='btn__set' name='radio' type="radio" value="1" id='radio-1' defaultChecked />
              <label className='label__btn__text' htmlFor="radio-1">Чат</label>
              <input className="btn__set" name='radio' type="radio" value="2" id='radio-2' />
              <label className='label__btn__text' htmlFor="radio-2">Вопрос / ответ</label>
            </div>
            <div className="chat__top">
              {comments.map(comment => (
                <div className="block__massage" key={comment.id}>
                  <div className="massage">
                    <h2 className="name">{comment.name}</h2>
                    <p className="text">{comment.text}</p>
                  </div>
                  <div className="like">
                    <button className='icon__like' onClick={() => handleLike(comment.id)}>
                      {likedComments.includes(comment.id) ? (
                        <img src="/src/assets/image/Vector (1).svg" alt="liked" />
                      ) : (
                        <img src="/src/assets/image/Vector.svg" alt="like" />
                      )}
                    </button>
                    <p className={likedComments.includes(comment.id) ? 'activ__kol__like' : 'kol__like'}>{comment.likes}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat__footer">
              {isInput ? (
                <>
                  <div className="smile__logo">
                    <button className='btn__smile'>
                      <img className='smile' src="/src/assets/image/Icn.svg" alt="smile" />
                    </button>
                  </div>
                  <form className="imput__massage" onSubmit={handleCommentSubmit}>
                    <textarea
                      autoComplete="off"
                      placeholder="Текст"
                      className="input__text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button className="btn__massage" type="submit">Отправить</button>
                  </form>
                  <div className="name__edit">
                    <div className="chat__name__edit">
                      <p className='chat__name'>Имя в чате:</p>
                      {editName ? (
                        <input
                          type="text"
                          className="input__name"
                          value={chatName}
                          onChange={handleNameChange}
                          onBlur={handleNameEdit}
                          autoFocus
                        />
                      ) : (
                        <p className='chat__name'>{chatName}</p>
                      )}
                    </div>
                    <button className='btn__name__edit' onClick={handleNameEdit}>
                      {editName ? 'Сохранить' : 'Ред.'}
                    </button>
                  </div>
                </>
              ) : (
                <button className="btn__massage" onClick={handleButtonClick}>
                  Хотите оставить сообщение?<br />
                  Нажмите на эту кнопку
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Player;

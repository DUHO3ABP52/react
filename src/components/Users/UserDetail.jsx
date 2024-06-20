import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/slices/userSlice";
import { useParams } from "react-router-dom";
import "./UserDetail.css";

const UserDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="financial-solutions-expert-profile">
      <div className="financial-solutions-expert-section">
        <p class="financial-solutions-expert-style">
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
          <br />
          <br />В работе с клиентами недостаточно просто решить конкретную
          проблему или помочь справиться с трудностями. Не менее важно уделять
          внимание обмену знаниями: &quot;Один из самых позитивных моментов —
          это осознание того, что ты помог клиенту перейти на совершенно новый
          уровень компетентности, уверенность в том, что после окончания проекта
          у клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно&quot;.
          <br />
          <br />
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин
          ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
      </div>
      <div className="contact-info-container1">
        <div className="contact-info-container">
          <div className="svg-container2">
          </div>
          <p className="contact-info-text">{user.phone || "No phone number"}</p>
        </div>
        <div className="contact-info-section">
          <div className="svg-container3">
          </div>
          <p className="contact-info-text">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
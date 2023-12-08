const Pager = () => {
  return (
    <ul className="c-pager">
      <li className="c-pager__item"><a className="c-pager__link" href="/DUMMY">&laquo;</a></li>
      <li className="c-pager__item"><a className="c-pager__link" href="/DUMMY">&lsaquo;</a></li>
      <li className="c-pager__item"><a className="c-pager__link" href="/DUMMY">1</a></li>
      <li className="c-pager__item"><a className="c-pager__link is-current" href="/DUMMY">2</a></li>
      <li className="c-pager__item"><a className="c-pager__link" href="/DUMMY">3</a></li>
      <li className="c-pager__item"><a className="c-pager__link" href="/DUMMY">&rsaquo;</a></li>
      <li className="c-pager__item"><a className="c-pager__link" href="/DUMMY">&raquo;</a></li>
  </ul>

  );
};

export default Pager;
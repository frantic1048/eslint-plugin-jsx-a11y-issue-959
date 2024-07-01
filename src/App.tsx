const NotAControl = (...props) => "not a form control";

export default () => {
  // expected: no error would be thrown from `jsx-a11y/control-has-associated-label`
  return (
    <tbody>
      <tr>
        <th>
          <br />
        </th>
        <th>
          <NotAControl />
        </th>
        <th>just text</th>
        <th>
          <em>non self-closing tag</em>
        </th>
      </tr>
    </tbody>
  );
};

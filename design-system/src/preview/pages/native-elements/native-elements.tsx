

export const NativeElements = () => {
    return (
        <div className="native-elements-preview">
            <p className="lead">A showcase of standard HTML elements to verify base styles.</p>

            <section>
                <h2>Typography</h2>
                <hr />
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <p>
                    This is a standard paragraph. It contains <strong>strong text</strong>, <em>emphasized text</em>,
                    <mark>marked text</mark>, <small>small text</small>, <code>inline code</code>, and <a href="#">a link</a>.
                </p>

                <blockquote>
                    <p>This is a blockquote. It is used to quote text from another source.</p>
                    <cite>— Source Name</cite>
                </blockquote>

                <pre>
                    <code>
                        {`function helloWorld() {
  console.log("Hello, World!");
}`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Lists</h2>
                <hr />
                <h3>Unordered List</h3>
                <ul>
                    <li>List item one</li>
                    <li>List item two
                        <ul>
                            <li>Nested item one</li>
                            <li>Nested item two</li>
                        </ul>
                    </li>
                    <li>List item three</li>
                </ul>

                <h3>Ordered List</h3>
                <ol>
                    <li>First item</li>
                    <li>Second item
                        <ol>
                            <li>Nested first item</li>
                            <li>Nested second item</li>
                        </ol>
                    </li>
                    <li>Third item</li>
                </ol>

                <h3>Definition List</h3>
                <dl>
                    <dt>Term 1</dt>
                    <dd>Definition for term 1</dd>
                    <dt>Term 2</dt>
                    <dd>Definition for term 2</dd>
                </dl>
            </section>

            <section>
                <h2>Forms</h2>
                <hr />
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Input Fields</legend>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="text">Text Input:</label><br />
                            <input type="text" id="text" placeholder="Text input" />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="email">Email Input:</label><br />
                            <input type="email" id="email" placeholder="name@example.com" />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="password">Password Input:</label><br />
                            <input type="password" id="password" value="password123" readOnly />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="number">Number Input:</label><br />
                            <input type="number" id="number" placeholder="0" />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="search">Search Input:</label><br />
                            <input type="search" id="search" placeholder="Search..." />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="date">Date Input:</label><br />
                            <input type="date" id="date" />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="file">File Input:</label><br />
                            <input type="file" id="file" />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Selection Controls</legend>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="select">Select Menu:</label><br />
                            <select id="select">
                                <option value="">Choose an option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <p>Checkboxes:</p>
                            <label>
                                <input type="checkbox" name="check" value="1" /> Option 1
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="check" value="2" defaultChecked /> Option 2
                            </label>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <p>Radio Buttons:</p>
                            <label>
                                <input type="radio" name="radio" value="1" /> Option 1
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="radio" value="2" defaultChecked /> Option 2
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Text Area</legend>
                        <label htmlFor="textarea">Message:</label><br />
                        <textarea id="textarea" rows={4} placeholder="Type your message here..."></textarea>
                    </fieldset>

                    <fieldset>
                        <legend>Buttons</legend>
                        <button>Sencondary</button>
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-success">Success</button>
                        <button className="btn btn-ghost">Cancel</button>
                        <button className="btn btn-danger">Danger</button>
                        <button disabled>Disabled</button>
                    </fieldset>
                </form>
            </section>

            <section>
                <h2>Tables</h2>
                <hr />
                <table>
                    <caption>Employee Data</caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>John Doe</td>
                            <td>Developer</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Jane Smith</td>
                            <td>Designer</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Bob Johnson</td>
                            <td>Manager</td>
                            <td>Inactive</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>Total Employees: 3</td>
                        </tr>
                    </tfoot>
                </table>
            </section>

            <section>
                <h2>Interactive</h2>
                <hr />
                <details>
                    <summary>Click to expand details</summary>
                    <p>This is the hidden content that is revealed when the user clicks on the summary.</p>
                </details>
            </section>
        </div>
    );
};

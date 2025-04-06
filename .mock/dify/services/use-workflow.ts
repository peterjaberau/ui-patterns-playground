const app = {
    'app.useAppStore.appDetails': {
        "id": "b2ad53bf-a195-4d31-9738-ca76f87460a9",
        "name": "Error-handling-demo",
        "description": "",
        "mode": "workflow",
        "icon_type": "emoji",
        "icon": "🔨",
        "icon_background": "#FFEAD5",
        "icon_url": null,
        "enable_site": true,
        "enable_api": true,
        "model_config": null,
        "workflow": null,
        "site": {
            "access_token": "2XcCUXkzqfxNtecI",
            "code": "2XcCUXkzqfxNtecI",
            "title": "Error-handling-demo",
            "icon_type": "emoji",
            "icon": "🔨",
            "icon_background": "#FFEAD5",
            "icon_url": null,
            "description": null,
            "default_language": "en-US",
            "chat_color_theme": null,
            "chat_color_theme_inverted": false,
            "customize_domain": null,
            "copyright": null,
            "privacy_policy": null,
            "custom_disclaimer": "",
            "customize_token_strategy": "not_allow",
            "prompt_public": false,
            "app_base_url": "http://127.0.0.1:3000",
            "show_workflow_steps": true,
            "use_icon_as_answer_icon": false,
            "created_by": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
            "created_at": 1743849168,
            "updated_by": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
            "updated_at": 1743849168
        },
        "api_base_url": "http://127.0.0.1:5001/v1",
        "use_icon_as_answer_icon": false,
        "created_by": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
        "created_at": 1743849168,
        "updated_by": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
        "updated_at": 1743849168,
        "deleted_tools": [],
        "enable_sso": false
    }

}


const data = {



    'workflow.hooks.useWorkflow': {
        "useWorkflowStore": {},
        "appId": "b2ad53bf-a195-4d31-9738-ca76f87460a9",
        "nodesExtraData": {
            "start": {
                "author": "Dify",
                "about": "Define the initial parameters for launching a workflow",
                "availablePrevNodes": [],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "end": {
                "author": "Dify",
                "about": "Define the end and result type of a workflow",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": []
            },
            "answer": {
                "author": "Dify",
                "about": "Define the reply content of a chat conversation",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "llm": {
                "author": "Dify",
                "about": "Invoking large language models to answer questions or process natural language",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "knowledge-retrieval": {
                "author": "Dify",
                "about": "Allows you to query text content related to user questions from the Knowledge",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "if-else": {
                "author": "Dify",
                "about": "Allows you to split the workflow into two branches based on if/else conditions",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "iteration": {
                "author": "Dify",
                "about": "Perform multiple steps on a list object until all results are outputted.",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "iteration-start": {
                "author": "Dify",
                "about": "workflow.blocksAbout.iteration-start",
                "availablePrevNodes": [],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "loop": {
                "author": "AICT-Team",
                "about": "Execute a loop of logic until the termination condition is met or the maximum loop count is reached.",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "loop-start": {
                "author": "AICT-Team",
                "about": "workflow.blocksAbout.loop-start",
                "availablePrevNodes": [],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "loop-end": {
                "author": "Dify",
                "about": "Equivalent to \"break\". This node has no configuration items. When the loop body reaches this node, the loop terminates.",
                "availablePrevNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": []
            },
            "code": {
                "author": "Dify",
                "about": "Execute a piece of Python or NodeJS code to implement custom logic",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "template-transform": {
                "author": "Dify",
                "about": "Convert data to string using Jinja template syntax",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "question-classifier": {
                "author": "Dify",
                "about": "Define the classification conditions of user questions, LLM can define how the conversation progresses based on the classification description",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "http-request": {
                "author": "Dify",
                "about": "Allow server requests to be sent over the HTTP protocol",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "variable-assigner": {
                "author": "Dify",
                "about": "Aggregate multi-branch variables into a single variable for unified configuration of downstream nodes.",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "assigner": {
                "author": "Dify",
                "about": "The variable assignment node is used for assigning values to writable variables(like conversation variables).",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "variable-aggregator": {
                "author": "Dify",
                "about": "Aggregate multi-branch variables into a single variable for unified configuration of downstream nodes.",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "parameter-extractor": {
                "author": "Dify",
                "about": "Use LLM to extract structured parameters from natural language for tool invocations or HTTP requests.",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "tool": {
                "author": "Dify",
                "about": "workflow.blocksAbout.tool",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "document-extractor": {
                "author": "Dify",
                "about": "Used to parse uploaded documents into text content that is easily understandable by LLM.",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "list-operator": {
                "author": "Dify",
                "about": "Used to filter or sort array content.",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            },
            "agent": {
                "author": "Dify",
                "about": "Invoking large language models to answer questions or process natural language",
                "availablePrevNodes": [
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ],
                "availableNextNodes": [
                    "end",
                    "llm",
                    "knowledge-retrieval",
                    "question-classifier",
                    "if-else",
                    "code",
                    "template-transform",
                    "http-request",
                    "variable-assigner",
                    "variable-aggregator",
                    "tool",
                    "parameter-extractor",
                    "iteration",
                    "document-extractor",
                    "list-operator",
                    "iteration-start",
                    "assigner",
                    "agent",
                    "loop",
                    "loop-start",
                    "loop-end"
                ]
            }
        },
        "workflowConfig": {
            "parallel_depth_limit": 3
        },
        "return": {}
    },


    'workflow.hooks.useFetchToolsData': {
        "buildInTools": [
            {
                "id": "code",
                "author": "Dify",
                "name": "code",
                "plugin_id": null,
                "plugin_unique_identifier": "",
                "description": {
                    "zh_Hans": "运行一段代码并返回结果。",
                    "en_US": "Run a piece of code and get the result back.",
                    "pt_BR": "Execute um trecho de código e obtenha o resultado de volta.",
                    "ja_JP": "Run a piece of code and get the result back."
                },
                "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/code/icon",
                "label": {
                    "zh_Hans": "代码解释器",
                    "en_US": "Code Interpreter",
                    "pt_BR": "Interpretador de Código",
                    "ja_JP": "Code Interpreter"
                },
                "type": "builtin",
                "team_credentials": {},
                "is_team_authorization": true,
                "allow_delete": false,
                "tools": [
                    {
                        "author": "Dify",
                        "name": "simple_code",
                        "label": {
                            "en_US": "Code Interpreter",
                            "zh_Hans": "代码解释器",
                            "pt_BR": "Interpretador de Código",
                            "ja_JP": "Code Interpreter"
                        },
                        "description": {
                            "en_US": "Run code and get the result back. When you're using a lower quality model, please make sure there are some tips help LLM to understand how to write the code.",
                            "zh_Hans": "运行一段代码并返回结果。当您使用较低质量的模型时，请确保有一些提示帮助LLM理解如何编写代码。",
                            "pt_BR": "Execute um trecho de código e obtenha o resultado de volta. quando você estiver usando um modelo de qualidade inferior, certifique-se de que existam algumas dicas para ajudar o LLM a entender como escrever o código.",
                            "ja_JP": "Run code and get the result back. When you're using a lower quality model, please make sure there are some tips help LLM to understand how to write the code."
                        },
                        "parameters": [
                            {
                                "name": "language",
                                "label": {
                                    "en_US": "Language",
                                    "zh_Hans": "语言",
                                    "pt_BR": "Idioma",
                                    "ja_JP": "Language"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [
                                    {
                                        "value": "python3",
                                        "label": {
                                            "en_US": "Python3",
                                            "zh_Hans": "Python3",
                                            "pt_BR": "Python3",
                                            "ja_JP": "Python3"
                                        }
                                    },
                                    {
                                        "value": "javascript",
                                        "label": {
                                            "en_US": "JavaScript",
                                            "zh_Hans": "JavaScript",
                                            "pt_BR": "JavaScript",
                                            "ja_JP": "JavaScript"
                                        }
                                    }
                                ],
                                "type": "string",
                                "human_description": {
                                    "en_US": "The programming language of the code",
                                    "zh_Hans": "代码的编程语言",
                                    "pt_BR": "A linguagem de programação do código",
                                    "ja_JP": "The programming language of the code"
                                },
                                "form": "llm",
                                "llm_description": "language of the code, only \"python3\" and \"javascript\" are supported"
                            },
                            {
                                "name": "code",
                                "label": {
                                    "en_US": "Code",
                                    "zh_Hans": "代码",
                                    "pt_BR": "Código",
                                    "ja_JP": "Code"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "The code to be executed",
                                    "zh_Hans": "要执行的代码",
                                    "pt_BR": "O código a ser executado",
                                    "ja_JP": "The code to be executed"
                                },
                                "form": "llm",
                                "llm_description": "code to be executed, only native packages are allowed, network/IO operations are disabled."
                            }
                        ],
                        "labels": [
                            "productivity"
                        ],
                        "output_schema": null
                    }
                ],
                "labels": [
                    "productivity"
                ]
            },
            {
                "id": "time",
                "author": "Dify",
                "name": "time",
                "plugin_id": null,
                "plugin_unique_identifier": "",
                "description": {
                    "zh_Hans": "一个用于获取当前时间的工具。",
                    "en_US": "A tool for getting the current time.",
                    "pt_BR": "A tool for getting the current time.",
                    "ja_JP": "A tool for getting the current time."
                },
                "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/time/icon",
                "label": {
                    "zh_Hans": "时间",
                    "en_US": "CurrentTime",
                    "pt_BR": "CurrentTime",
                    "ja_JP": "CurrentTime"
                },
                "type": "builtin",
                "team_credentials": {},
                "is_team_authorization": true,
                "allow_delete": false,
                "tools": [
                    {
                        "author": "Dify",
                        "name": "current_time",
                        "label": {
                            "en_US": "Current Time",
                            "zh_Hans": "获取当前时间",
                            "pt_BR": "Current Time",
                            "ja_JP": "Current Time"
                        },
                        "description": {
                            "en_US": "A tool for getting the current time.",
                            "zh_Hans": "一个用于获取当前时间的工具。",
                            "pt_BR": "A tool for getting the current time.",
                            "ja_JP": "A tool for getting the current time."
                        },
                        "parameters": [
                            {
                                "name": "format",
                                "label": {
                                    "en_US": "Format",
                                    "zh_Hans": "格式",
                                    "pt_BR": "Format",
                                    "ja_JP": "Format"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": false,
                                "default": "%Y-%m-%d %H:%M:%S",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "Time format in strftime standard.",
                                    "zh_Hans": "strftime 标准的时间格式。",
                                    "pt_BR": "Time format in strftime standard.",
                                    "ja_JP": "Time format in strftime standard."
                                },
                                "form": "form",
                                "llm_description": null
                            },
                            {
                                "name": "timezone",
                                "label": {
                                    "en_US": "Timezone",
                                    "zh_Hans": "时区",
                                    "pt_BR": "Timezone",
                                    "ja_JP": "Timezone"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": false,
                                "default": "UTC",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [
                                    {
                                        "value": "UTC",
                                        "label": {
                                            "en_US": "UTC",
                                            "zh_Hans": "UTC",
                                            "pt_BR": "UTC",
                                            "ja_JP": "UTC"
                                        }
                                    },
                                    {
                                        "value": "America/New_York",
                                        "label": {
                                            "en_US": "America/New_York",
                                            "zh_Hans": "美洲/纽约",
                                            "pt_BR": "America/New_York",
                                            "ja_JP": "America/New_York"
                                        }
                                    },
                                    {
                                        "value": "America/Los_Angeles",
                                        "label": {
                                            "en_US": "America/Los_Angeles",
                                            "zh_Hans": "美洲/洛杉矶",
                                            "pt_BR": "America/Los_Angeles",
                                            "ja_JP": "America/Los_Angeles"
                                        }
                                    },
                                    {
                                        "value": "America/Chicago",
                                        "label": {
                                            "en_US": "America/Chicago",
                                            "zh_Hans": "美洲/芝加哥",
                                            "pt_BR": "America/Chicago",
                                            "ja_JP": "America/Chicago"
                                        }
                                    },
                                    {
                                        "value": "America/Sao_Paulo",
                                        "label": {
                                            "en_US": "America/Sao_Paulo",
                                            "zh_Hans": "美洲/圣保罗",
                                            "pt_BR": "América/São Paulo",
                                            "ja_JP": "America/Sao_Paulo"
                                        }
                                    },
                                    {
                                        "value": "Asia/Shanghai",
                                        "label": {
                                            "en_US": "Asia/Shanghai",
                                            "zh_Hans": "亚洲/上海",
                                            "pt_BR": "Asia/Shanghai",
                                            "ja_JP": "Asia/Shanghai"
                                        }
                                    },
                                    {
                                        "value": "Asia/Ho_Chi_Minh",
                                        "label": {
                                            "en_US": "Asia/Ho_Chi_Minh",
                                            "zh_Hans": "亚洲/胡志明市",
                                            "pt_BR": "Ásia/Ho Chi Minh",
                                            "ja_JP": "Asia/Ho_Chi_Minh"
                                        }
                                    },
                                    {
                                        "value": "Asia/Tokyo",
                                        "label": {
                                            "en_US": "Asia/Tokyo",
                                            "zh_Hans": "亚洲/东京",
                                            "pt_BR": "Asia/Tokyo",
                                            "ja_JP": "Asia/Tokyo"
                                        }
                                    },
                                    {
                                        "value": "Asia/Dubai",
                                        "label": {
                                            "en_US": "Asia/Dubai",
                                            "zh_Hans": "亚洲/迪拜",
                                            "pt_BR": "Asia/Dubai",
                                            "ja_JP": "Asia/Dubai"
                                        }
                                    },
                                    {
                                        "value": "Asia/Kolkata",
                                        "label": {
                                            "en_US": "Asia/Kolkata",
                                            "zh_Hans": "亚洲/加尔各答",
                                            "pt_BR": "Asia/Kolkata",
                                            "ja_JP": "Asia/Kolkata"
                                        }
                                    },
                                    {
                                        "value": "Asia/Seoul",
                                        "label": {
                                            "en_US": "Asia/Seoul",
                                            "zh_Hans": "亚洲/首尔",
                                            "pt_BR": "Asia/Seoul",
                                            "ja_JP": "Asia/Seoul"
                                        }
                                    },
                                    {
                                        "value": "Asia/Singapore",
                                        "label": {
                                            "en_US": "Asia/Singapore",
                                            "zh_Hans": "亚洲/新加坡",
                                            "pt_BR": "Asia/Singapore",
                                            "ja_JP": "Asia/Singapore"
                                        }
                                    },
                                    {
                                        "value": "Europe/London",
                                        "label": {
                                            "en_US": "Europe/London",
                                            "zh_Hans": "欧洲/伦敦",
                                            "pt_BR": "Europe/London",
                                            "ja_JP": "Europe/London"
                                        }
                                    },
                                    {
                                        "value": "Europe/Berlin",
                                        "label": {
                                            "en_US": "Europe/Berlin",
                                            "zh_Hans": "欧洲/柏林",
                                            "pt_BR": "Europe/Berlin",
                                            "ja_JP": "Europe/Berlin"
                                        }
                                    },
                                    {
                                        "value": "Europe/Moscow",
                                        "label": {
                                            "en_US": "Europe/Moscow",
                                            "zh_Hans": "欧洲/莫斯科",
                                            "pt_BR": "Europe/Moscow",
                                            "ja_JP": "Europe/Moscow"
                                        }
                                    },
                                    {
                                        "value": "Australia/Sydney",
                                        "label": {
                                            "en_US": "Australia/Sydney",
                                            "zh_Hans": "澳大利亚/悉尼",
                                            "pt_BR": "Australia/Sydney",
                                            "ja_JP": "Australia/Sydney"
                                        }
                                    },
                                    {
                                        "value": "Pacific/Auckland",
                                        "label": {
                                            "en_US": "Pacific/Auckland",
                                            "zh_Hans": "太平洋/奥克兰",
                                            "pt_BR": "Pacific/Auckland",
                                            "ja_JP": "Pacific/Auckland"
                                        }
                                    },
                                    {
                                        "value": "Africa/Cairo",
                                        "label": {
                                            "en_US": "Africa/Cairo",
                                            "zh_Hans": "非洲/开罗",
                                            "pt_BR": "Africa/Cairo",
                                            "ja_JP": "Africa/Cairo"
                                        }
                                    }
                                ],
                                "type": "select",
                                "human_description": {
                                    "en_US": "Timezone",
                                    "zh_Hans": "时区",
                                    "pt_BR": "Timezone",
                                    "ja_JP": "Timezone"
                                },
                                "form": "form",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "utilities"
                        ],
                        "output_schema": null
                    },
                    {
                        "author": "zhuhao",
                        "name": "timezone_conversion",
                        "label": {
                            "en_US": "convert time to equivalent time zone",
                            "zh_Hans": "时区转换",
                            "pt_BR": "convert time to equivalent time zone",
                            "ja_JP": "convert time to equivalent time zone"
                        },
                        "description": {
                            "en_US": "A tool to convert time to equivalent time zone",
                            "zh_Hans": "时区转换",
                            "pt_BR": "A tool to convert time to equivalent time zone",
                            "ja_JP": "A tool to convert time to equivalent time zone"
                        },
                        "parameters": [
                            {
                                "name": "current_time",
                                "label": {
                                    "en_US": "current time",
                                    "zh_Hans": "当前时间",
                                    "pt_BR": "current time",
                                    "ja_JP": "current time"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "current time, such as 2024-1-1 0:0:0",
                                    "zh_Hans": "当前时间, 比如2024-1-1 0:0:0",
                                    "pt_BR": "current time, such as 2024-1-1 0:0:0",
                                    "ja_JP": "current time, such as 2024-1-1 0:0:0"
                                },
                                "form": "llm",
                                "llm_description": null
                            },
                            {
                                "name": "current_timezone",
                                "label": {
                                    "en_US": "Current Timezone",
                                    "zh_Hans": "当前时区",
                                    "pt_BR": "Current Timezone",
                                    "ja_JP": "Current Timezone"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": "Asia/Shanghai",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "Current Timezone, such as Asia/Shanghai",
                                    "zh_Hans": "当前时区, 比如Asia/Shanghai",
                                    "pt_BR": "Current Timezone, such as Asia/Shanghai",
                                    "ja_JP": "Current Timezone, such as Asia/Shanghai"
                                },
                                "form": "llm",
                                "llm_description": null
                            },
                            {
                                "name": "target_timezone",
                                "label": {
                                    "en_US": "Target Timezone",
                                    "zh_Hans": "目标时区",
                                    "pt_BR": "Target Timezone",
                                    "ja_JP": "Target Timezone"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": "Asia/Tokyo",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "Target Timezone, such as Asia/Tokyo",
                                    "zh_Hans": "目标时区, 比如Asia/Tokyo",
                                    "pt_BR": "Target Timezone, such as Asia/Tokyo",
                                    "ja_JP": "Target Timezone, such as Asia/Tokyo"
                                },
                                "form": "llm",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "utilities"
                        ],
                        "output_schema": null
                    },
                    {
                        "author": "zhuhao",
                        "name": "timestamp_to_localtime",
                        "label": {
                            "en_US": "Timestamp to localtime",
                            "zh_Hans": "时间戳转换",
                            "pt_BR": "Timestamp to localtime",
                            "ja_JP": "Timestamp to localtime"
                        },
                        "description": {
                            "en_US": "A tool for timestamp convert to localtime",
                            "zh_Hans": "时间戳转换",
                            "pt_BR": "A tool for timestamp convert to localtime",
                            "ja_JP": "A tool for timestamp convert to localtime"
                        },
                        "parameters": [
                            {
                                "name": "timestamp",
                                "label": {
                                    "en_US": "Timestamp",
                                    "zh_Hans": "时间戳",
                                    "pt_BR": "Timestamp",
                                    "ja_JP": "Timestamp"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "number",
                                "human_description": {
                                    "en_US": "Timestamp",
                                    "zh_Hans": "时间戳",
                                    "pt_BR": "Timestamp",
                                    "ja_JP": "Timestamp"
                                },
                                "form": "llm",
                                "llm_description": null
                            },
                            {
                                "name": "timezone",
                                "label": {
                                    "en_US": "Timezone",
                                    "zh_Hans": "时区",
                                    "pt_BR": "Timezone",
                                    "ja_JP": "Timezone"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": false,
                                "default": "Asia/Shanghai",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "Timezone, such as Asia/Shanghai",
                                    "zh_Hans": "时区, 比如Asia/Shanghai",
                                    "pt_BR": "Timezone, such as Asia/Shanghai",
                                    "ja_JP": "Timezone, such as Asia/Shanghai"
                                },
                                "form": "llm",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "utilities"
                        ],
                        "output_schema": null
                    },
                    {
                        "author": "Bowen Liang",
                        "name": "weekday",
                        "label": {
                            "en_US": "Weekday Calculator",
                            "zh_Hans": "星期几计算器",
                            "pt_BR": "Weekday Calculator",
                            "ja_JP": "Weekday Calculator"
                        },
                        "description": {
                            "en_US": "A tool for calculating the weekday of a given date.",
                            "zh_Hans": "计算指定日期为星期几的工具。",
                            "pt_BR": "A tool for calculating the weekday of a given date.",
                            "ja_JP": "A tool for calculating the weekday of a given date."
                        },
                        "parameters": [
                            {
                                "name": "year",
                                "label": {
                                    "en_US": "Year",
                                    "zh_Hans": "年",
                                    "pt_BR": "Year",
                                    "ja_JP": "Year"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "number",
                                "human_description": {
                                    "en_US": "Year",
                                    "zh_Hans": "年",
                                    "pt_BR": "Year",
                                    "ja_JP": "Year"
                                },
                                "form": "llm",
                                "llm_description": null
                            },
                            {
                                "name": "month",
                                "label": {
                                    "en_US": "Month",
                                    "zh_Hans": "月",
                                    "pt_BR": "Month",
                                    "ja_JP": "Month"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "number",
                                "human_description": {
                                    "en_US": "Month",
                                    "zh_Hans": "月",
                                    "pt_BR": "Month",
                                    "ja_JP": "Month"
                                },
                                "form": "llm",
                                "llm_description": null
                            },
                            {
                                "name": "day",
                                "label": {
                                    "en_US": "day",
                                    "zh_Hans": "日",
                                    "pt_BR": "day",
                                    "ja_JP": "day"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "number",
                                "human_description": {
                                    "en_US": "day",
                                    "zh_Hans": "日",
                                    "pt_BR": "day",
                                    "ja_JP": "day"
                                },
                                "form": "llm",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "utilities"
                        ],
                        "output_schema": null
                    },
                    {
                        "author": "zhuhao",
                        "name": "localtime_to_timestamp",
                        "label": {
                            "en_US": "localtime to timestamp",
                            "zh_Hans": "获取时间戳",
                            "pt_BR": "localtime to timestamp",
                            "ja_JP": "localtime to timestamp"
                        },
                        "description": {
                            "en_US": "A tool for localtime convert to timestamp",
                            "zh_Hans": "获取时间戳",
                            "pt_BR": "A tool for localtime convert to timestamp",
                            "ja_JP": "A tool for localtime convert to timestamp"
                        },
                        "parameters": [
                            {
                                "name": "localtime",
                                "label": {
                                    "en_US": "localtime",
                                    "zh_Hans": "本地时间",
                                    "pt_BR": "localtime",
                                    "ja_JP": "localtime"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "localtime, such as 2024-1-1 0:0:0",
                                    "zh_Hans": "本地时间, 比如2024-1-1 0:0:0",
                                    "pt_BR": "localtime, such as 2024-1-1 0:0:0",
                                    "ja_JP": "localtime, such as 2024-1-1 0:0:0"
                                },
                                "form": "llm",
                                "llm_description": null
                            },
                            {
                                "name": "timezone",
                                "label": {
                                    "en_US": "Timezone",
                                    "zh_Hans": "时区",
                                    "pt_BR": "Timezone",
                                    "ja_JP": "Timezone"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": false,
                                "default": "Asia/Shanghai",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "Timezone, such as Asia/Shanghai",
                                    "zh_Hans": "时区, 比如Asia/Shanghai",
                                    "pt_BR": "Timezone, such as Asia/Shanghai",
                                    "ja_JP": "Timezone, such as Asia/Shanghai"
                                },
                                "form": "llm",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "utilities"
                        ],
                        "output_schema": null
                    }
                ],
                "labels": [
                    "utilities"
                ]
            },
            {
                "id": "webscraper",
                "author": "Dify",
                "name": "webscraper",
                "plugin_id": null,
                "plugin_unique_identifier": "",
                "description": {
                    "zh_Hans": "一个用于抓取网页的工具。",
                    "en_US": "Web Scrapper tool kit is used to scrape web",
                    "pt_BR": "Web Scrapper tool kit is used to scrape web",
                    "ja_JP": "Web Scrapper tool kit is used to scrape web"
                },
                "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/webscraper/icon",
                "label": {
                    "zh_Hans": "网页抓取",
                    "en_US": "WebScraper",
                    "pt_BR": "WebScraper",
                    "ja_JP": "WebScraper"
                },
                "type": "builtin",
                "team_credentials": {},
                "is_team_authorization": true,
                "allow_delete": false,
                "tools": [
                    {
                        "author": "Dify",
                        "name": "webscraper",
                        "label": {
                            "en_US": "Web Scraper",
                            "zh_Hans": "网页爬虫",
                            "pt_BR": "Web Scraper",
                            "ja_JP": "Web Scraper"
                        },
                        "description": {
                            "en_US": "A tool for scraping webpages.",
                            "zh_Hans": "一个用于爬取网页的工具。",
                            "pt_BR": "A tool for scraping webpages.",
                            "ja_JP": "A tool for scraping webpages."
                        },
                        "parameters": [
                            {
                                "name": "url",
                                "label": {
                                    "en_US": "URL",
                                    "zh_Hans": "网页链接",
                                    "pt_BR": "URL",
                                    "ja_JP": "URL"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "used for linking to webpages",
                                    "zh_Hans": "用于链接到网页",
                                    "pt_BR": "used for linking to webpages",
                                    "ja_JP": "used for linking to webpages"
                                },
                                "form": "llm",
                                "llm_description": "url for scraping"
                            },
                            {
                                "name": "user_agent",
                                "label": {
                                    "en_US": "User Agent",
                                    "zh_Hans": "User Agent",
                                    "pt_BR": "User Agent",
                                    "ja_JP": "User Agent"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": false,
                                "default": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.1000.0 Safari/537.36",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "used for identifying the browser.",
                                    "zh_Hans": "用于识别浏览器。",
                                    "pt_BR": "used for identifying the browser.",
                                    "ja_JP": "used for identifying the browser."
                                },
                                "form": "form",
                                "llm_description": null
                            },
                            {
                                "name": "generate_summary",
                                "label": {
                                    "en_US": "Whether to generate summary",
                                    "zh_Hans": "是否生成摘要",
                                    "pt_BR": "Whether to generate summary",
                                    "ja_JP": "Whether to generate summary"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": false,
                                "default": "false",
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [
                                    {
                                        "value": "true",
                                        "label": {
                                            "en_US": "Yes",
                                            "zh_Hans": "是",
                                            "pt_BR": "Yes",
                                            "ja_JP": "Yes"
                                        }
                                    },
                                    {
                                        "value": "false",
                                        "label": {
                                            "en_US": "No",
                                            "zh_Hans": "否",
                                            "pt_BR": "No",
                                            "ja_JP": "No"
                                        }
                                    }
                                ],
                                "type": "boolean",
                                "human_description": {
                                    "en_US": "If true, the crawler will only return the page summary content.",
                                    "zh_Hans": "如果启用，爬虫将仅返回页面摘要内容。",
                                    "pt_BR": "If true, the crawler will only return the page summary content.",
                                    "ja_JP": "If true, the crawler will only return the page summary content."
                                },
                                "form": "form",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "productivity"
                        ],
                        "output_schema": null
                    }
                ],
                "labels": [
                    "productivity"
                ]
            },
            {
                "id": "audio",
                "author": "hjlarry",
                "name": "audio",
                "plugin_id": null,
                "plugin_unique_identifier": "",
                "description": {
                    "zh_Hans": "一个用于文本转语音和语音转文本的工具。",
                    "en_US": "A tool for tts and asr.",
                    "pt_BR": "A tool for tts and asr.",
                    "ja_JP": "A tool for tts and asr."
                },
                "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/audio/icon",
                "label": {
                    "zh_Hans": "Audio",
                    "en_US": "Audio",
                    "pt_BR": "Audio",
                    "ja_JP": "Audio"
                },
                "type": "builtin",
                "team_credentials": {},
                "is_team_authorization": true,
                "allow_delete": false,
                "tools": [
                    {
                        "author": "hjlarry",
                        "name": "tts",
                        "label": {
                            "en_US": "Text To Speech",
                            "zh_Hans": "Text To Speech",
                            "pt_BR": "Text To Speech",
                            "ja_JP": "Text To Speech"
                        },
                        "description": {
                            "en_US": "Convert text to audio file.",
                            "zh_Hans": "将文本转换为音频文件。",
                            "pt_BR": "Convert text to audio file.",
                            "ja_JP": "Convert text to audio file."
                        },
                        "parameters": [
                            {
                                "name": "text",
                                "label": {
                                    "en_US": "Text",
                                    "zh_Hans": "文本",
                                    "pt_BR": "Text",
                                    "ja_JP": "Text"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "string",
                                "human_description": {
                                    "en_US": "The text to be converted.",
                                    "zh_Hans": "要转换的文本。",
                                    "pt_BR": "The text to be converted.",
                                    "ja_JP": "The text to be converted."
                                },
                                "form": "llm",
                                "llm_description": "The text to be converted."
                            },
                            {
                                "name": "model",
                                "label": {
                                    "en_US": "Model",
                                    "zh_Hans": "Model",
                                    "pt_BR": "Model",
                                    "ja_JP": "Model"
                                },
                                "placeholder": {
                                    "en_US": "Select a model",
                                    "zh_Hans": "选择模型",
                                    "pt_BR": "Select a model",
                                    "ja_JP": "Select a model"
                                },
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "select",
                                "human_description": {
                                    "en_US": "All available TTS models. You can config model in the Model Provider of Settings.",
                                    "zh_Hans": "所有可用的 TTS 模型。你可以在设置中的模型供应商里配置。",
                                    "pt_BR": "All available TTS models. You can config model in the Model Provider of Settings.",
                                    "ja_JP": "All available TTS models. You can config model in the Model Provider of Settings."
                                },
                                "form": "form",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "utilities"
                        ],
                        "output_schema": null
                    },
                    {
                        "author": "hjlarry",
                        "name": "asr",
                        "label": {
                            "en_US": "Speech To Text",
                            "zh_Hans": "Speech To Text",
                            "pt_BR": "Speech To Text",
                            "ja_JP": "Speech To Text"
                        },
                        "description": {
                            "en_US": "Convert audio file to text.",
                            "zh_Hans": "将音频文件转换为文本。",
                            "pt_BR": "Convert audio file to text.",
                            "ja_JP": "Convert audio file to text."
                        },
                        "parameters": [
                            {
                                "name": "audio_file",
                                "label": {
                                    "en_US": "Audio File",
                                    "zh_Hans": "音频文件",
                                    "pt_BR": "Audio File",
                                    "ja_JP": "Audio File"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "file",
                                "human_description": {
                                    "en_US": "The audio file to be converted.",
                                    "zh_Hans": "要转换的音频文件。",
                                    "pt_BR": "The audio file to be converted.",
                                    "ja_JP": "The audio file to be converted."
                                },
                                "form": "llm",
                                "llm_description": "The audio file to be converted."
                            },
                            {
                                "name": "model",
                                "label": {
                                    "en_US": "Model",
                                    "zh_Hans": "Model",
                                    "pt_BR": "Model",
                                    "ja_JP": "Model"
                                },
                                "placeholder": null,
                                "scope": null,
                                "auto_generate": null,
                                "template": null,
                                "required": true,
                                "default": null,
                                "min": null,
                                "max": null,
                                "precision": null,
                                "options": [],
                                "type": "select",
                                "human_description": {
                                    "en_US": "All available ASR models. You can config model in the Model Provider of Settings.",
                                    "zh_Hans": "所有可用的 ASR 模型。你可以在设置中的模型供应商里配置。",
                                    "pt_BR": "All available ASR models. You can config model in the Model Provider of Settings.",
                                    "ja_JP": "All available ASR models. You can config model in the Model Provider of Settings."
                                },
                                "form": "form",
                                "llm_description": null
                            }
                        ],
                        "labels": [
                            "utilities"
                        ],
                        "output_schema": null
                    }
                ],
                "labels": [
                    "utilities"
                ]
            }
        ],
        "customTools": [],
        "workflowTools": []
    },

    'workflow.hooks.useWorkflowInit': {
        "data": {
            "id": "7e43926a-37d5-4f4e-aeb4-92f890374689",
            "graph": {
                "nodes": [
                    {
                        "data": {
                            "desc": "",
                            "selected": false,
                            "title": "Start",
                            "type": "start",
                            "variables": [
                                {
                                    "label": "llm_string",
                                    "max_length": 10000,
                                    "options": [],
                                    "required": true,
                                    "type": "paragraph",
                                    "variable": "llm_string"
                                }
                            ]
                        },
                        "height": 90,
                        "id": "1732007415808",
                        "position": {
                            "x": 30,
                            "y": 297
                        },
                        "positionAbsolute": {
                            "x": 30,
                            "y": 297
                        },
                        "selected": false,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom",
                        "width": 244
                    },
                    {
                        "data": {
                            "context": {
                                "enabled": false,
                                "variable_selector": []
                            },
                            "desc": "",
                            "model": {
                                "completion_params": {
                                    "temperature": 0.7
                                },
                                "mode": "chat",
                                "name": "claude-3-5-sonnet-20241022",
                                "provider": "langgenius/anthropic/anthropic"
                            },
                            "prompt_template": [
                                {
                                    "id": "362ad4bd-b8b9-4921-b81f-fc285eb76915",
                                    "role": "system",
                                    "text": "You are a teaching assistant. According to the user's request, only output an example code in correct or incorrect JSON format."
                                },
                                {
                                    "id": "5f643c70-0cbe-4ad0-b0c5-c48ddcc6630b",
                                    "role": "user",
                                    "text": "This is the user's request:{{#1732007415808.llm_string#}}"
                                }
                            ],
                            "selected": false,
                            "title": "Generate wrong JSON.",
                            "type": "llm",
                            "variables": [],
                            "vision": {
                                "enabled": false
                            }
                        },
                        "height": 96,
                        "id": "1733478262179",
                        "position": {
                            "x": 334,
                            "y": 297
                        },
                        "positionAbsolute": {
                            "x": 334,
                            "y": 297
                        },
                        "selected": false,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom",
                        "width": 244
                    },
                    {
                        "data": {
                            "code": "def main(json_str: str) -> dict:\n    obj = json.loads(json_str)\n    return {'result': obj}",
                            "code_language": "python3",
                            "desc": "",
                            "error_strategy": "fail-branch",
                            "outputs": {
                                "result": {
                                    "children": null,
                                    "type": "object"
                                }
                            },
                            "selected": true,
                            "title": "Simulate JSON escaping",
                            "type": "code",
                            "variables": [
                                {
                                    "value_selector": [
                                        "1733478262179",
                                        "text"
                                    ],
                                    "variable": "json_str"
                                }
                            ]
                        },
                        "height": 90,
                        "id": "1733478343153",
                        "position": {
                            "x": 638,
                            "y": 297
                        },
                        "positionAbsolute": {
                            "x": 638,
                            "y": 297
                        },
                        "selected": true,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom",
                        "width": 244
                    },
                    {
                        "data": {
                            "desc": "",
                            "outputs": [
                                {
                                    "value_selector": [
                                        "1733478262179",
                                        "text"
                                    ],
                                    "variable": "text1"
                                },
                                {
                                    "value_selector": [
                                        "1733479010027",
                                        "text"
                                    ],
                                    "variable": "text2"
                                },
                                {
                                    "value_selector": [
                                        "1733478343153",
                                        "error_message"
                                    ],
                                    "variable": "error_message"
                                },
                                {
                                    "value_selector": [
                                        "1733478343153",
                                        "error_type"
                                    ],
                                    "variable": "error_type"
                                },
                                {
                                    "value_selector": [
                                        "1733478785564",
                                        "output"
                                    ],
                                    "variable": "output"
                                }
                            ],
                            "selected": false,
                            "title": "End ",
                            "type": "end"
                        },
                        "height": 194,
                        "id": "1733478413552",
                        "position": {
                            "x": 1854,
                            "y": 297
                        },
                        "positionAbsolute": {
                            "x": 1854,
                            "y": 297
                        },
                        "selected": false,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom",
                        "width": 244
                    },
                    {
                        "data": {
                            "code": "def main(json_str: str) -> dict:\n    obj = json.loads(json_str)\n    return {'result': obj}",
                            "code_language": "python3",
                            "desc": "",
                            "outputs": {
                                "result": {
                                    "children": null,
                                    "type": "object"
                                }
                            },
                            "selected": false,
                            "title": "Secondary execution",
                            "type": "code",
                            "variables": [
                                {
                                    "value_selector": [
                                        "1733479010027",
                                        "text"
                                    ],
                                    "variable": "json_str"
                                }
                            ]
                        },
                        "height": 54,
                        "id": "17334785192390",
                        "position": {
                            "x": 1246,
                            "y": 375
                        },
                        "positionAbsolute": {
                            "x": 1246,
                            "y": 375
                        },
                        "selected": false,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom",
                        "width": 244
                    },
                    {
                        "data": {
                            "desc": "",
                            "output_type": "object",
                            "selected": false,
                            "title": "Variable Aggregator",
                            "type": "variable-aggregator",
                            "variables": [
                                [
                                    "1733478343153",
                                    "result"
                                ],
                                [
                                    "17334785192390",
                                    "result"
                                ]
                            ]
                        },
                        "height": 130,
                        "id": "1733478785564",
                        "position": {
                            "x": 1550,
                            "y": 297
                        },
                        "positionAbsolute": {
                            "x": 1550,
                            "y": 297
                        },
                        "selected": false,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom",
                        "width": 244
                    },
                    {
                        "data": {
                            "context": {
                                "enabled": false,
                                "variable_selector": []
                            },
                            "desc": "",
                            "model": {
                                "completion_params": {
                                    "temperature": 0.7
                                },
                                "mode": "chat",
                                "name": "claude-3-5-sonnet-20241022",
                                "provider": "langgenius/anthropic/anthropic"
                            },
                            "prompt_template": [
                                {
                                    "id": "4451cc50-f360-4d42-a925-9cfb98d3babc",
                                    "role": "system",
                                    "text": "You are a JSON repair expert."
                                },
                                {
                                    "id": "9e04c9bc-db50-4804-9562-7505b521eebc",
                                    "role": "user",
                                    "text": "Based on the {{#1733478343153.error_type#}} and {{#1733478343153.error_message#}} from the first version (x), your response should only contain the corrected JSON for repairing {{#1733478262179.text#}}"
                                }
                            ],
                            "selected": false,
                            "title": "JSON repair",
                            "type": "llm",
                            "variables": [],
                            "vision": {
                                "enabled": false
                            }
                        },
                        "height": 96,
                        "id": "1733479010027",
                        "position": {
                            "x": 942,
                            "y": 375
                        },
                        "positionAbsolute": {
                            "x": 942,
                            "y": 375
                        },
                        "selected": false,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom",
                        "width": 244
                    },
                    {
                        "data": {
                            "author": "Yevanchen",
                            "desc": "",
                            "height": 215,
                            "selected": false,
                            "showAuthor": true,
                            "text": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"This demonstration generates an incorrect JSON format to simulate the situation where some LLM cannot output well-formatted JSON. In the fail branch, the error type and error message are used to repair it with LLM. Finally, the variable aggregator is used to merge it into the main branch for normal use. The variable aggregator is used here because the fail branch is actually an embedded if-else branch. When downstream nodes in dify need to reference multiple possible conditional branches with values from upstream, the variable aggregator must be used to uniformly aggregate them before they can be referenced.\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":0}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
                            "theme": "blue",
                            "title": "",
                            "type": "",
                            "width": 503
                        },
                        "height": 215,
                        "id": "1733906923641",
                        "position": {
                            "x": 28.586897189782576,
                            "y": -38.59155464652039
                        },
                        "positionAbsolute": {
                            "x": 28.586897189782576,
                            "y": -38.59155464652039
                        },
                        "selected": false,
                        "sourcePosition": "right",
                        "targetPosition": "left",
                        "type": "custom-note",
                        "width": 503
                    }
                ],
                "edges": [
                    {
                        "data": {
                            "isInIteration": false,
                            "sourceType": "start",
                            "targetType": "llm"
                        },
                        "id": "1732007415808-source-1733478262179-target",
                        "source": "1732007415808",
                        "sourceHandle": "source",
                        "target": "1733478262179",
                        "targetHandle": "target",
                        "type": "custom",
                        "zIndex": 0
                    },
                    {
                        "data": {
                            "isInIteration": false,
                            "sourceType": "llm",
                            "targetType": "code"
                        },
                        "id": "1733478262179-source-1733478343153-target",
                        "source": "1733478262179",
                        "sourceHandle": "source",
                        "target": "1733478343153",
                        "targetHandle": "target",
                        "type": "custom",
                        "zIndex": 0
                    },
                    {
                        "data": {
                            "isInIteration": false,
                            "sourceType": "variable-aggregator",
                            "targetType": "end"
                        },
                        "id": "1733478785564-source-1733478413552-target",
                        "source": "1733478785564",
                        "sourceHandle": "source",
                        "target": "1733478413552",
                        "targetHandle": "target",
                        "type": "custom",
                        "zIndex": 0
                    },
                    {
                        "data": {
                            "isInIteration": false,
                            "sourceType": "llm",
                            "targetType": "code"
                        },
                        "id": "1733479010027-source-17334785192390-target",
                        "source": "1733479010027",
                        "sourceHandle": "source",
                        "target": "17334785192390",
                        "targetHandle": "target",
                        "type": "custom",
                        "zIndex": 0
                    },
                    {
                        "data": {
                            "isInIteration": false,
                            "sourceType": "code",
                            "targetType": "variable-aggregator"
                        },
                        "id": "1733478343153-source-1733478785564-target",
                        "source": "1733478343153",
                        "sourceHandle": "source",
                        "target": "1733478785564",
                        "targetHandle": "target",
                        "type": "custom",
                        "zIndex": 0
                    },
                    {
                        "data": {
                            "isInIteration": false,
                            "sourceType": "code",
                            "targetType": "llm"
                        },
                        "id": "1733478343153-fail-branch-1733479010027-target",
                        "source": "1733478343153",
                        "sourceHandle": "fail-branch",
                        "target": "1733479010027",
                        "targetHandle": "target",
                        "type": "custom",
                        "zIndex": 0
                    },
                    {
                        "data": {
                            "isInIteration": false,
                            "sourceType": "code",
                            "targetType": "variable-aggregator"
                        },
                        "id": "17334785192390-source-1733478785564-target",
                        "selected": false,
                        "source": "17334785192390",
                        "sourceHandle": "source",
                        "target": "1733478785564",
                        "targetHandle": "target",
                        "type": "custom",
                        "zIndex": 0
                    }
                ],
                "viewport": {
                    "x": 118.27890942638942,
                    "y": 131.40112913690757,
                    "zoom": 0.8494058490285668
                }
            },
            "features": {
                "opening_statement": "",
                "suggested_questions": [],
                "suggested_questions_after_answer": {
                    "enabled": false
                },
                "text_to_speech": {
                    "enabled": false,
                    "language": "",
                    "voice": ""
                },
                "speech_to_text": {
                    "enabled": false
                },
                "retriever_resource": {
                    "enabled": true
                },
                "sensitive_word_avoidance": {
                    "enabled": false
                },
                "file_upload": {
                    "image": {
                        "enabled": false,
                        "number_limits": 3,
                        "transfer_methods": [
                            "local_file",
                            "remote_url"
                        ]
                    },
                    "enabled": false,
                    "allowed_file_types": [
                        "image"
                    ],
                    "allowed_file_extensions": [
                        ".JPG",
                        ".JPEG",
                        ".PNG",
                        ".GIF",
                        ".WEBP",
                        ".SVG"
                    ],
                    "allowed_file_upload_methods": [
                        "local_file",
                        "remote_url"
                    ],
                    "number_limits": 3,
                    "fileUploadConfig": {
                        "file_size_limit": 15,
                        "batch_count_limit": 5,
                        "image_file_size_limit": 10,
                        "video_file_size_limit": 100,
                        "audio_file_size_limit": 50,
                        "workflow_file_upload_limit": 10
                    }
                }
            },
            "hash": "88d19c10c3a87d3ed10992a104d3e0fd12cc787ce7922cd27292fa57094b8a39",
            "version": "draft",
            "marked_name": "",
            "marked_comment": "",
            "created_by": {
                "id": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
                "name": "peterjaberau",
                "email": "peterjaberau@gmail.com"
            },
            "created_at": 1743849168,
            "updated_by": {
                "id": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
                "name": "peterjaberau",
                "email": "peterjaberau@gmail.com"
            },
            "updated_at": 1743857661,
            "tool_published": false,
            "environment_variables": [],
            "conversation_variables": []
        },
        "isLoading": false
    }
}


const services = {
    "fetchNodesDefaultConfigs": [
        {
            "type": "llm",
            "config": {
                "prompt_templates": {
                    "chat_model": {
                        "prompts": [
                            {
                                "role": "system",
                                "text": "You are a helpful AI assistant.",
                                "edition_type": "basic"
                            }
                        ]
                    },
                    "completion_model": {
                        "conversation_histories_role": {
                            "user_prefix": "Human",
                            "assistant_prefix": "Assistant"
                        },
                        "prompt": {
                            "text": "Here are the chat histories between human and assistant, inside <histories></histories> XML tags.\n\n<histories>\n{{#histories#}}\n</histories>\n\n\nHuman: {{#sys.query#}}\n\nAssistant:",
                            "edition_type": "basic"
                        },
                        "stop": [
                            "Human:"
                        ]
                    }
                }
            }
        },
        {
            "type": "llm",
            "config": {
                "prompt_templates": {
                    "chat_model": {
                        "prompts": [
                            {
                                "role": "system",
                                "text": "You are a helpful AI assistant.",
                                "edition_type": "basic"
                            }
                        ]
                    },
                    "completion_model": {
                        "conversation_histories_role": {
                            "user_prefix": "Human",
                            "assistant_prefix": "Assistant"
                        },
                        "prompt": {
                            "text": "Here are the chat histories between human and assistant, inside <histories></histories> XML tags.\n\n<histories>\n{{#histories#}}\n</histories>\n\n\nHuman: {{#sys.query#}}\n\nAssistant:",
                            "edition_type": "basic"
                        },
                        "stop": [
                            "Human:"
                        ]
                    }
                }
            }
        },
        {
            "type": "code",
            "config": {
                "variables": [
                    {
                        "variable": "arg1",
                        "value_selector": []
                    },
                    {
                        "variable": "arg2",
                        "value_selector": []
                    }
                ],
                "code_language": "python3",
                "code": "\ndef main(arg1: str, arg2: str) -> dict:\n    return {\n        \"result\": arg1 + arg2,\n    }\n",
                "outputs": {
                    "result": {
                        "type": "string",
                        "children": null
                    }
                }
            }
        },
        {
            "type": "template-transform",
            "config": {
                "variables": [
                    {
                        "variable": "arg1",
                        "value_selector": []
                    }
                ],
                "template": "{{ arg1 }}"
            }
        },
        {
            "type": "question-classifier",
            "config": {
                "instructions": ""
            }
        },
        {
            "type": "http-request",
            "config": {
                "method": "get",
                "authorization": {
                    "type": "no-auth"
                },
                "body": {
                    "type": "none"
                },
                "timeout": {
                    "connect": 300,
                    "read": 600,
                    "write": 600,
                    "max_connect_timeout": 300,
                    "max_read_timeout": 600,
                    "max_write_timeout": 600
                }
            },
            "retry_config": {
                "max_retries": 3,
                "retry_interval": 2,
                "retry_enabled": true
            }
        },
        {
            "type": "iteration",
            "config": {
                "is_parallel": false,
                "parallel_nums": 10,
                "error_handle_mode": "terminated"
            }
        },
        {
            "model": {
                "prompt_templates": {
                    "completion_model": {
                        "conversation_histories_role": {
                            "user_prefix": "Human",
                            "assistant_prefix": "Assistant"
                        },
                        "stop": [
                            "Human:"
                        ]
                    }
                }
            }
        }
    ],
    "fetchPublishedWorkflow": {
        "id": null,
        "graph": null,
        "features": null,
        "hash": null,
        "version": null,
        "marked_name": null,
        "marked_comment": null,
        "created_by": {
            "id": null,
            "name": null,
            "email": null
        },
        "created_at": null,
        "updated_by": null,
        "updated_at": null,
        "tool_published": null,
        "environment_variables": null,
        "conversation_variables": null
    },
    "fetchWorkflowDraft": {
        "id": "7e43926a-37d5-4f4e-aeb4-92f890374689",
        "graph": {
            "nodes": [
                {
                    "data": {
                        "desc": "",
                        "selected": false,
                        "title": "Start",
                        "type": "start",
                        "variables": [
                            {
                                "label": "llm_string",
                                "max_length": 10000,
                                "options": [],
                                "required": true,
                                "type": "paragraph",
                                "variable": "llm_string"
                            }
                        ]
                    },
                    "height": 90,
                    "id": "1732007415808",
                    "position": {
                        "x": 30,
                        "y": 297
                    },
                    "positionAbsolute": {
                        "x": 30,
                        "y": 297
                    },
                    "selected": false,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom",
                    "width": 244
                },
                {
                    "data": {
                        "context": {
                            "enabled": false,
                            "variable_selector": []
                        },
                        "desc": "",
                        "model": {
                            "completion_params": {
                                "temperature": 0.7
                            },
                            "mode": "chat",
                            "name": "claude-3-5-sonnet-20241022",
                            "provider": "langgenius/anthropic/anthropic"
                        },
                        "prompt_template": [
                            {
                                "id": "362ad4bd-b8b9-4921-b81f-fc285eb76915",
                                "role": "system",
                                "text": "You are a teaching assistant. According to the user's request, only output an example code in correct or incorrect JSON format."
                            },
                            {
                                "id": "5f643c70-0cbe-4ad0-b0c5-c48ddcc6630b",
                                "role": "user",
                                "text": "This is the user's request:{{#1732007415808.llm_string#}}"
                            }
                        ],
                        "selected": false,
                        "title": "Generate wrong JSON.",
                        "type": "llm",
                        "variables": [],
                        "vision": {
                            "enabled": false
                        }
                    },
                    "height": 96,
                    "id": "1733478262179",
                    "position": {
                        "x": 334,
                        "y": 297
                    },
                    "positionAbsolute": {
                        "x": 334,
                        "y": 297
                    },
                    "selected": false,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom",
                    "width": 244
                },
                {
                    "data": {
                        "code": "def main(json_str: str) -> dict:\n    obj = json.loads(json_str)\n    return {'result': obj}",
                        "code_language": "python3",
                        "desc": "",
                        "error_strategy": "fail-branch",
                        "outputs": {
                            "result": {
                                "children": null,
                                "type": "object"
                            }
                        },
                        "selected": true,
                        "title": "Simulate JSON escaping",
                        "type": "code",
                        "variables": [
                            {
                                "value_selector": [
                                    "1733478262179",
                                    "text"
                                ],
                                "variable": "json_str"
                            }
                        ]
                    },
                    "height": 90,
                    "id": "1733478343153",
                    "position": {
                        "x": 638,
                        "y": 297
                    },
                    "positionAbsolute": {
                        "x": 638,
                        "y": 297
                    },
                    "selected": true,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom",
                    "width": 244
                },
                {
                    "data": {
                        "desc": "",
                        "outputs": [
                            {
                                "value_selector": [
                                    "1733478262179",
                                    "text"
                                ],
                                "variable": "text1"
                            },
                            {
                                "value_selector": [
                                    "1733479010027",
                                    "text"
                                ],
                                "variable": "text2"
                            },
                            {
                                "value_selector": [
                                    "1733478343153",
                                    "error_message"
                                ],
                                "variable": "error_message"
                            },
                            {
                                "value_selector": [
                                    "1733478343153",
                                    "error_type"
                                ],
                                "variable": "error_type"
                            },
                            {
                                "value_selector": [
                                    "1733478785564",
                                    "output"
                                ],
                                "variable": "output"
                            }
                        ],
                        "selected": false,
                        "title": "End ",
                        "type": "end"
                    },
                    "height": 194,
                    "id": "1733478413552",
                    "position": {
                        "x": 1854,
                        "y": 297
                    },
                    "positionAbsolute": {
                        "x": 1854,
                        "y": 297
                    },
                    "selected": false,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom",
                    "width": 244
                },
                {
                    "data": {
                        "code": "def main(json_str: str) -> dict:\n    obj = json.loads(json_str)\n    return {'result': obj}",
                        "code_language": "python3",
                        "desc": "",
                        "outputs": {
                            "result": {
                                "children": null,
                                "type": "object"
                            }
                        },
                        "selected": false,
                        "title": "Secondary execution",
                        "type": "code",
                        "variables": [
                            {
                                "value_selector": [
                                    "1733479010027",
                                    "text"
                                ],
                                "variable": "json_str"
                            }
                        ]
                    },
                    "height": 54,
                    "id": "17334785192390",
                    "position": {
                        "x": 1246,
                        "y": 375
                    },
                    "positionAbsolute": {
                        "x": 1246,
                        "y": 375
                    },
                    "selected": false,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom",
                    "width": 244
                },
                {
                    "data": {
                        "desc": "",
                        "output_type": "object",
                        "selected": false,
                        "title": "Variable Aggregator",
                        "type": "variable-aggregator",
                        "variables": [
                            [
                                "1733478343153",
                                "result"
                            ],
                            [
                                "17334785192390",
                                "result"
                            ]
                        ]
                    },
                    "height": 130,
                    "id": "1733478785564",
                    "position": {
                        "x": 1550,
                        "y": 297
                    },
                    "positionAbsolute": {
                        "x": 1550,
                        "y": 297
                    },
                    "selected": false,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom",
                    "width": 244
                },
                {
                    "data": {
                        "context": {
                            "enabled": false,
                            "variable_selector": []
                        },
                        "desc": "",
                        "model": {
                            "completion_params": {
                                "temperature": 0.7
                            },
                            "mode": "chat",
                            "name": "claude-3-5-sonnet-20241022",
                            "provider": "langgenius/anthropic/anthropic"
                        },
                        "prompt_template": [
                            {
                                "id": "4451cc50-f360-4d42-a925-9cfb98d3babc",
                                "role": "system",
                                "text": "You are a JSON repair expert."
                            },
                            {
                                "id": "9e04c9bc-db50-4804-9562-7505b521eebc",
                                "role": "user",
                                "text": "Based on the {{#1733478343153.error_type#}} and {{#1733478343153.error_message#}} from the first version (x), your response should only contain the corrected JSON for repairing {{#1733478262179.text#}}"
                            }
                        ],
                        "selected": false,
                        "title": "JSON repair",
                        "type": "llm",
                        "variables": [],
                        "vision": {
                            "enabled": false
                        }
                    },
                    "height": 96,
                    "id": "1733479010027",
                    "position": {
                        "x": 942,
                        "y": 375
                    },
                    "positionAbsolute": {
                        "x": 942,
                        "y": 375
                    },
                    "selected": false,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom",
                    "width": 244
                },
                {
                    "data": {
                        "author": "Yevanchen",
                        "desc": "",
                        "height": 215,
                        "selected": false,
                        "showAuthor": true,
                        "text": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"This demonstration generates an incorrect JSON format to simulate the situation where some LLM cannot output well-formatted JSON. In the fail branch, the error type and error message are used to repair it with LLM. Finally, the variable aggregator is used to merge it into the main branch for normal use. The variable aggregator is used here because the fail branch is actually an embedded if-else branch. When downstream nodes in dify need to reference multiple possible conditional branches with values from upstream, the variable aggregator must be used to uniformly aggregate them before they can be referenced.\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":0}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
                        "theme": "blue",
                        "title": "",
                        "type": "",
                        "width": 503
                    },
                    "height": 215,
                    "id": "1733906923641",
                    "position": {
                        "x": 28.586897189782576,
                        "y": -38.59155464652039
                    },
                    "positionAbsolute": {
                        "x": 28.586897189782576,
                        "y": -38.59155464652039
                    },
                    "selected": false,
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "type": "custom-note",
                    "width": 503
                }
            ],
            "edges": [
                {
                    "data": {
                        "isInIteration": false,
                        "sourceType": "start",
                        "targetType": "llm"
                    },
                    "id": "1732007415808-source-1733478262179-target",
                    "source": "1732007415808",
                    "sourceHandle": "source",
                    "target": "1733478262179",
                    "targetHandle": "target",
                    "type": "custom",
                    "zIndex": 0
                },
                {
                    "data": {
                        "isInIteration": false,
                        "sourceType": "llm",
                        "targetType": "code"
                    },
                    "id": "1733478262179-source-1733478343153-target",
                    "source": "1733478262179",
                    "sourceHandle": "source",
                    "target": "1733478343153",
                    "targetHandle": "target",
                    "type": "custom",
                    "zIndex": 0
                },
                {
                    "data": {
                        "isInIteration": false,
                        "sourceType": "variable-aggregator",
                        "targetType": "end"
                    },
                    "id": "1733478785564-source-1733478413552-target",
                    "source": "1733478785564",
                    "sourceHandle": "source",
                    "target": "1733478413552",
                    "targetHandle": "target",
                    "type": "custom",
                    "zIndex": 0
                },
                {
                    "data": {
                        "isInIteration": false,
                        "sourceType": "llm",
                        "targetType": "code"
                    },
                    "id": "1733479010027-source-17334785192390-target",
                    "source": "1733479010027",
                    "sourceHandle": "source",
                    "target": "17334785192390",
                    "targetHandle": "target",
                    "type": "custom",
                    "zIndex": 0
                },
                {
                    "data": {
                        "isInIteration": false,
                        "sourceType": "code",
                        "targetType": "variable-aggregator"
                    },
                    "id": "1733478343153-source-1733478785564-target",
                    "source": "1733478343153",
                    "sourceHandle": "source",
                    "target": "1733478785564",
                    "targetHandle": "target",
                    "type": "custom",
                    "zIndex": 0
                },
                {
                    "data": {
                        "isInIteration": false,
                        "sourceType": "code",
                        "targetType": "llm"
                    },
                    "id": "1733478343153-fail-branch-1733479010027-target",
                    "source": "1733478343153",
                    "sourceHandle": "fail-branch",
                    "target": "1733479010027",
                    "targetHandle": "target",
                    "type": "custom",
                    "zIndex": 0
                },
                {
                    "data": {
                        "isInIteration": false,
                        "sourceType": "code",
                        "targetType": "variable-aggregator"
                    },
                    "id": "17334785192390-source-1733478785564-target",
                    "selected": false,
                    "source": "17334785192390",
                    "sourceHandle": "source",
                    "target": "1733478785564",
                    "targetHandle": "target",
                    "type": "custom",
                    "zIndex": 0
                }
            ],
            "viewport": {
                "x": 137.92105082403367,
                "y": 121.74037482015616,
                "zoom": 0.9612861887448817
            }
        },
        "features": {
            "opening_statement": "",
            "suggested_questions": [],
            "suggested_questions_after_answer": {
                "enabled": false
            },
            "text_to_speech": {
                "enabled": false,
                "language": "",
                "voice": ""
            },
            "speech_to_text": {
                "enabled": false
            },
            "retriever_resource": {
                "enabled": true
            },
            "sensitive_word_avoidance": {
                "enabled": false
            },
            "file_upload": {
                "image": {
                    "enabled": false,
                    "number_limits": 3,
                    "transfer_methods": [
                        "local_file",
                        "remote_url"
                    ]
                },
                "enabled": false,
                "allowed_file_types": [
                    "image"
                ],
                "allowed_file_extensions": [
                    ".JPG",
                    ".JPEG",
                    ".PNG",
                    ".GIF",
                    ".WEBP",
                    ".SVG"
                ],
                "allowed_file_upload_methods": [
                    "local_file",
                    "remote_url"
                ],
                "number_limits": 3,
                "fileUploadConfig": {
                    "file_size_limit": 15,
                    "batch_count_limit": 5,
                    "image_file_size_limit": 10,
                    "video_file_size_limit": 100,
                    "audio_file_size_limit": 50,
                    "workflow_file_upload_limit": 10
                }
            }
        },
        "hash": "d1b3cd956dd10e41aade6c22037f2132cf3304c9086c67a3805a5cb99600fe37",
        "version": "draft",
        "marked_name": "",
        "marked_comment": "",
        "created_by": {
            "id": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
            "name": "peterjaberau",
            "email": "peterjaberau@gmail.com"
        },
        "created_at": 1743849168,
        "updated_by": {
            "id": "707d99c6-85b2-4bab-a10e-5eff38c12baa",
            "name": "peterjaberau",
            "email": "peterjaberau@gmail.com"
        },
        "updated_at": 1743858149,
        "tool_published": false,
        "environment_variables": [],
        "conversation_variables": []
    },
    "fetchAllBuiltInTools": [
        {
            "id": "code",
            "author": "Dify",
            "name": "code",
            "plugin_id": null,
            "plugin_unique_identifier": "",
            "description": {
                "zh_Hans": "运行一段代码并返回结果。",
                "en_US": "Run a piece of code and get the result back.",
                "pt_BR": "Execute um trecho de código e obtenha o resultado de volta.",
                "ja_JP": "Run a piece of code and get the result back."
            },
            "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/code/icon",
            "label": {
                "zh_Hans": "代码解释器",
                "en_US": "Code Interpreter",
                "pt_BR": "Interpretador de Código",
                "ja_JP": "Code Interpreter"
            },
            "type": "builtin",
            "team_credentials": {},
            "is_team_authorization": true,
            "allow_delete": false,
            "tools": [
                {
                    "author": "Dify",
                    "name": "simple_code",
                    "label": {
                        "en_US": "Code Interpreter",
                        "zh_Hans": "代码解释器",
                        "pt_BR": "Interpretador de Código",
                        "ja_JP": "Code Interpreter"
                    },
                    "description": {
                        "en_US": "Run code and get the result back. When you're using a lower quality model, please make sure there are some tips help LLM to understand how to write the code.",
                        "zh_Hans": "运行一段代码并返回结果。当您使用较低质量的模型时，请确保有一些提示帮助LLM理解如何编写代码。",
                        "pt_BR": "Execute um trecho de código e obtenha o resultado de volta. quando você estiver usando um modelo de qualidade inferior, certifique-se de que existam algumas dicas para ajudar o LLM a entender como escrever o código.",
                        "ja_JP": "Run code and get the result back. When you're using a lower quality model, please make sure there are some tips help LLM to understand how to write the code."
                    },
                    "parameters": [
                        {
                            "name": "language",
                            "label": {
                                "en_US": "Language",
                                "zh_Hans": "语言",
                                "pt_BR": "Idioma",
                                "ja_JP": "Language"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [
                                {
                                    "value": "python3",
                                    "label": {
                                        "en_US": "Python3",
                                        "zh_Hans": "Python3",
                                        "pt_BR": "Python3",
                                        "ja_JP": "Python3"
                                    }
                                },
                                {
                                    "value": "javascript",
                                    "label": {
                                        "en_US": "JavaScript",
                                        "zh_Hans": "JavaScript",
                                        "pt_BR": "JavaScript",
                                        "ja_JP": "JavaScript"
                                    }
                                }
                            ],
                            "type": "string",
                            "human_description": {
                                "en_US": "The programming language of the code",
                                "zh_Hans": "代码的编程语言",
                                "pt_BR": "A linguagem de programação do código",
                                "ja_JP": "The programming language of the code"
                            },
                            "form": "llm",
                            "llm_description": "language of the code, only \"python3\" and \"javascript\" are supported"
                        },
                        {
                            "name": "code",
                            "label": {
                                "en_US": "Code",
                                "zh_Hans": "代码",
                                "pt_BR": "Código",
                                "ja_JP": "Code"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "The code to be executed",
                                "zh_Hans": "要执行的代码",
                                "pt_BR": "O código a ser executado",
                                "ja_JP": "The code to be executed"
                            },
                            "form": "llm",
                            "llm_description": "code to be executed, only native packages are allowed, network/IO operations are disabled."
                        }
                    ],
                    "labels": [
                        "productivity"
                    ],
                    "output_schema": null
                }
            ],
            "labels": [
                "productivity"
            ]
        },
        {
            "id": "time",
            "author": "Dify",
            "name": "time",
            "plugin_id": null,
            "plugin_unique_identifier": "",
            "description": {
                "zh_Hans": "一个用于获取当前时间的工具。",
                "en_US": "A tool for getting the current time.",
                "pt_BR": "A tool for getting the current time.",
                "ja_JP": "A tool for getting the current time."
            },
            "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/time/icon",
            "label": {
                "zh_Hans": "时间",
                "en_US": "CurrentTime",
                "pt_BR": "CurrentTime",
                "ja_JP": "CurrentTime"
            },
            "type": "builtin",
            "team_credentials": {},
            "is_team_authorization": true,
            "allow_delete": false,
            "tools": [
                {
                    "author": "Dify",
                    "name": "current_time",
                    "label": {
                        "en_US": "Current Time",
                        "zh_Hans": "获取当前时间",
                        "pt_BR": "Current Time",
                        "ja_JP": "Current Time"
                    },
                    "description": {
                        "en_US": "A tool for getting the current time.",
                        "zh_Hans": "一个用于获取当前时间的工具。",
                        "pt_BR": "A tool for getting the current time.",
                        "ja_JP": "A tool for getting the current time."
                    },
                    "parameters": [
                        {
                            "name": "format",
                            "label": {
                                "en_US": "Format",
                                "zh_Hans": "格式",
                                "pt_BR": "Format",
                                "ja_JP": "Format"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": false,
                            "default": "%Y-%m-%d %H:%M:%S",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "Time format in strftime standard.",
                                "zh_Hans": "strftime 标准的时间格式。",
                                "pt_BR": "Time format in strftime standard.",
                                "ja_JP": "Time format in strftime standard."
                            },
                            "form": "form",
                            "llm_description": null
                        },
                        {
                            "name": "timezone",
                            "label": {
                                "en_US": "Timezone",
                                "zh_Hans": "时区",
                                "pt_BR": "Timezone",
                                "ja_JP": "Timezone"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": false,
                            "default": "UTC",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [
                                {
                                    "value": "UTC",
                                    "label": {
                                        "en_US": "UTC",
                                        "zh_Hans": "UTC",
                                        "pt_BR": "UTC",
                                        "ja_JP": "UTC"
                                    }
                                },
                                {
                                    "value": "America/New_York",
                                    "label": {
                                        "en_US": "America/New_York",
                                        "zh_Hans": "美洲/纽约",
                                        "pt_BR": "America/New_York",
                                        "ja_JP": "America/New_York"
                                    }
                                },
                                {
                                    "value": "America/Los_Angeles",
                                    "label": {
                                        "en_US": "America/Los_Angeles",
                                        "zh_Hans": "美洲/洛杉矶",
                                        "pt_BR": "America/Los_Angeles",
                                        "ja_JP": "America/Los_Angeles"
                                    }
                                },
                                {
                                    "value": "America/Chicago",
                                    "label": {
                                        "en_US": "America/Chicago",
                                        "zh_Hans": "美洲/芝加哥",
                                        "pt_BR": "America/Chicago",
                                        "ja_JP": "America/Chicago"
                                    }
                                },
                                {
                                    "value": "America/Sao_Paulo",
                                    "label": {
                                        "en_US": "America/Sao_Paulo",
                                        "zh_Hans": "美洲/圣保罗",
                                        "pt_BR": "América/São Paulo",
                                        "ja_JP": "America/Sao_Paulo"
                                    }
                                },
                                {
                                    "value": "Asia/Shanghai",
                                    "label": {
                                        "en_US": "Asia/Shanghai",
                                        "zh_Hans": "亚洲/上海",
                                        "pt_BR": "Asia/Shanghai",
                                        "ja_JP": "Asia/Shanghai"
                                    }
                                },
                                {
                                    "value": "Asia/Ho_Chi_Minh",
                                    "label": {
                                        "en_US": "Asia/Ho_Chi_Minh",
                                        "zh_Hans": "亚洲/胡志明市",
                                        "pt_BR": "Ásia/Ho Chi Minh",
                                        "ja_JP": "Asia/Ho_Chi_Minh"
                                    }
                                },
                                {
                                    "value": "Asia/Tokyo",
                                    "label": {
                                        "en_US": "Asia/Tokyo",
                                        "zh_Hans": "亚洲/东京",
                                        "pt_BR": "Asia/Tokyo",
                                        "ja_JP": "Asia/Tokyo"
                                    }
                                },
                                {
                                    "value": "Asia/Dubai",
                                    "label": {
                                        "en_US": "Asia/Dubai",
                                        "zh_Hans": "亚洲/迪拜",
                                        "pt_BR": "Asia/Dubai",
                                        "ja_JP": "Asia/Dubai"
                                    }
                                },
                                {
                                    "value": "Asia/Kolkata",
                                    "label": {
                                        "en_US": "Asia/Kolkata",
                                        "zh_Hans": "亚洲/加尔各答",
                                        "pt_BR": "Asia/Kolkata",
                                        "ja_JP": "Asia/Kolkata"
                                    }
                                },
                                {
                                    "value": "Asia/Seoul",
                                    "label": {
                                        "en_US": "Asia/Seoul",
                                        "zh_Hans": "亚洲/首尔",
                                        "pt_BR": "Asia/Seoul",
                                        "ja_JP": "Asia/Seoul"
                                    }
                                },
                                {
                                    "value": "Asia/Singapore",
                                    "label": {
                                        "en_US": "Asia/Singapore",
                                        "zh_Hans": "亚洲/新加坡",
                                        "pt_BR": "Asia/Singapore",
                                        "ja_JP": "Asia/Singapore"
                                    }
                                },
                                {
                                    "value": "Europe/London",
                                    "label": {
                                        "en_US": "Europe/London",
                                        "zh_Hans": "欧洲/伦敦",
                                        "pt_BR": "Europe/London",
                                        "ja_JP": "Europe/London"
                                    }
                                },
                                {
                                    "value": "Europe/Berlin",
                                    "label": {
                                        "en_US": "Europe/Berlin",
                                        "zh_Hans": "欧洲/柏林",
                                        "pt_BR": "Europe/Berlin",
                                        "ja_JP": "Europe/Berlin"
                                    }
                                },
                                {
                                    "value": "Europe/Moscow",
                                    "label": {
                                        "en_US": "Europe/Moscow",
                                        "zh_Hans": "欧洲/莫斯科",
                                        "pt_BR": "Europe/Moscow",
                                        "ja_JP": "Europe/Moscow"
                                    }
                                },
                                {
                                    "value": "Australia/Sydney",
                                    "label": {
                                        "en_US": "Australia/Sydney",
                                        "zh_Hans": "澳大利亚/悉尼",
                                        "pt_BR": "Australia/Sydney",
                                        "ja_JP": "Australia/Sydney"
                                    }
                                },
                                {
                                    "value": "Pacific/Auckland",
                                    "label": {
                                        "en_US": "Pacific/Auckland",
                                        "zh_Hans": "太平洋/奥克兰",
                                        "pt_BR": "Pacific/Auckland",
                                        "ja_JP": "Pacific/Auckland"
                                    }
                                },
                                {
                                    "value": "Africa/Cairo",
                                    "label": {
                                        "en_US": "Africa/Cairo",
                                        "zh_Hans": "非洲/开罗",
                                        "pt_BR": "Africa/Cairo",
                                        "ja_JP": "Africa/Cairo"
                                    }
                                }
                            ],
                            "type": "select",
                            "human_description": {
                                "en_US": "Timezone",
                                "zh_Hans": "时区",
                                "pt_BR": "Timezone",
                                "ja_JP": "Timezone"
                            },
                            "form": "form",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "utilities"
                    ],
                    "output_schema": null
                },
                {
                    "author": "zhuhao",
                    "name": "timezone_conversion",
                    "label": {
                        "en_US": "convert time to equivalent time zone",
                        "zh_Hans": "时区转换",
                        "pt_BR": "convert time to equivalent time zone",
                        "ja_JP": "convert time to equivalent time zone"
                    },
                    "description": {
                        "en_US": "A tool to convert time to equivalent time zone",
                        "zh_Hans": "时区转换",
                        "pt_BR": "A tool to convert time to equivalent time zone",
                        "ja_JP": "A tool to convert time to equivalent time zone"
                    },
                    "parameters": [
                        {
                            "name": "current_time",
                            "label": {
                                "en_US": "current time",
                                "zh_Hans": "当前时间",
                                "pt_BR": "current time",
                                "ja_JP": "current time"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "current time, such as 2024-1-1 0:0:0",
                                "zh_Hans": "当前时间, 比如2024-1-1 0:0:0",
                                "pt_BR": "current time, such as 2024-1-1 0:0:0",
                                "ja_JP": "current time, such as 2024-1-1 0:0:0"
                            },
                            "form": "llm",
                            "llm_description": null
                        },
                        {
                            "name": "current_timezone",
                            "label": {
                                "en_US": "Current Timezone",
                                "zh_Hans": "当前时区",
                                "pt_BR": "Current Timezone",
                                "ja_JP": "Current Timezone"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": "Asia/Shanghai",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "Current Timezone, such as Asia/Shanghai",
                                "zh_Hans": "当前时区, 比如Asia/Shanghai",
                                "pt_BR": "Current Timezone, such as Asia/Shanghai",
                                "ja_JP": "Current Timezone, such as Asia/Shanghai"
                            },
                            "form": "llm",
                            "llm_description": null
                        },
                        {
                            "name": "target_timezone",
                            "label": {
                                "en_US": "Target Timezone",
                                "zh_Hans": "目标时区",
                                "pt_BR": "Target Timezone",
                                "ja_JP": "Target Timezone"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": "Asia/Tokyo",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "Target Timezone, such as Asia/Tokyo",
                                "zh_Hans": "目标时区, 比如Asia/Tokyo",
                                "pt_BR": "Target Timezone, such as Asia/Tokyo",
                                "ja_JP": "Target Timezone, such as Asia/Tokyo"
                            },
                            "form": "llm",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "utilities"
                    ],
                    "output_schema": null
                },
                {
                    "author": "zhuhao",
                    "name": "timestamp_to_localtime",
                    "label": {
                        "en_US": "Timestamp to localtime",
                        "zh_Hans": "时间戳转换",
                        "pt_BR": "Timestamp to localtime",
                        "ja_JP": "Timestamp to localtime"
                    },
                    "description": {
                        "en_US": "A tool for timestamp convert to localtime",
                        "zh_Hans": "时间戳转换",
                        "pt_BR": "A tool for timestamp convert to localtime",
                        "ja_JP": "A tool for timestamp convert to localtime"
                    },
                    "parameters": [
                        {
                            "name": "timestamp",
                            "label": {
                                "en_US": "Timestamp",
                                "zh_Hans": "时间戳",
                                "pt_BR": "Timestamp",
                                "ja_JP": "Timestamp"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "number",
                            "human_description": {
                                "en_US": "Timestamp",
                                "zh_Hans": "时间戳",
                                "pt_BR": "Timestamp",
                                "ja_JP": "Timestamp"
                            },
                            "form": "llm",
                            "llm_description": null
                        },
                        {
                            "name": "timezone",
                            "label": {
                                "en_US": "Timezone",
                                "zh_Hans": "时区",
                                "pt_BR": "Timezone",
                                "ja_JP": "Timezone"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": false,
                            "default": "Asia/Shanghai",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "Timezone, such as Asia/Shanghai",
                                "zh_Hans": "时区, 比如Asia/Shanghai",
                                "pt_BR": "Timezone, such as Asia/Shanghai",
                                "ja_JP": "Timezone, such as Asia/Shanghai"
                            },
                            "form": "llm",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "utilities"
                    ],
                    "output_schema": null
                },
                {
                    "author": "Bowen Liang",
                    "name": "weekday",
                    "label": {
                        "en_US": "Weekday Calculator",
                        "zh_Hans": "星期几计算器",
                        "pt_BR": "Weekday Calculator",
                        "ja_JP": "Weekday Calculator"
                    },
                    "description": {
                        "en_US": "A tool for calculating the weekday of a given date.",
                        "zh_Hans": "计算指定日期为星期几的工具。",
                        "pt_BR": "A tool for calculating the weekday of a given date.",
                        "ja_JP": "A tool for calculating the weekday of a given date."
                    },
                    "parameters": [
                        {
                            "name": "year",
                            "label": {
                                "en_US": "Year",
                                "zh_Hans": "年",
                                "pt_BR": "Year",
                                "ja_JP": "Year"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "number",
                            "human_description": {
                                "en_US": "Year",
                                "zh_Hans": "年",
                                "pt_BR": "Year",
                                "ja_JP": "Year"
                            },
                            "form": "llm",
                            "llm_description": null
                        },
                        {
                            "name": "month",
                            "label": {
                                "en_US": "Month",
                                "zh_Hans": "月",
                                "pt_BR": "Month",
                                "ja_JP": "Month"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "number",
                            "human_description": {
                                "en_US": "Month",
                                "zh_Hans": "月",
                                "pt_BR": "Month",
                                "ja_JP": "Month"
                            },
                            "form": "llm",
                            "llm_description": null
                        },
                        {
                            "name": "day",
                            "label": {
                                "en_US": "day",
                                "zh_Hans": "日",
                                "pt_BR": "day",
                                "ja_JP": "day"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "number",
                            "human_description": {
                                "en_US": "day",
                                "zh_Hans": "日",
                                "pt_BR": "day",
                                "ja_JP": "day"
                            },
                            "form": "llm",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "utilities"
                    ],
                    "output_schema": null
                },
                {
                    "author": "zhuhao",
                    "name": "localtime_to_timestamp",
                    "label": {
                        "en_US": "localtime to timestamp",
                        "zh_Hans": "获取时间戳",
                        "pt_BR": "localtime to timestamp",
                        "ja_JP": "localtime to timestamp"
                    },
                    "description": {
                        "en_US": "A tool for localtime convert to timestamp",
                        "zh_Hans": "获取时间戳",
                        "pt_BR": "A tool for localtime convert to timestamp",
                        "ja_JP": "A tool for localtime convert to timestamp"
                    },
                    "parameters": [
                        {
                            "name": "localtime",
                            "label": {
                                "en_US": "localtime",
                                "zh_Hans": "本地时间",
                                "pt_BR": "localtime",
                                "ja_JP": "localtime"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "localtime, such as 2024-1-1 0:0:0",
                                "zh_Hans": "本地时间, 比如2024-1-1 0:0:0",
                                "pt_BR": "localtime, such as 2024-1-1 0:0:0",
                                "ja_JP": "localtime, such as 2024-1-1 0:0:0"
                            },
                            "form": "llm",
                            "llm_description": null
                        },
                        {
                            "name": "timezone",
                            "label": {
                                "en_US": "Timezone",
                                "zh_Hans": "时区",
                                "pt_BR": "Timezone",
                                "ja_JP": "Timezone"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": false,
                            "default": "Asia/Shanghai",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "Timezone, such as Asia/Shanghai",
                                "zh_Hans": "时区, 比如Asia/Shanghai",
                                "pt_BR": "Timezone, such as Asia/Shanghai",
                                "ja_JP": "Timezone, such as Asia/Shanghai"
                            },
                            "form": "llm",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "utilities"
                    ],
                    "output_schema": null
                }
            ],
            "labels": [
                "utilities"
            ]
        },
        {
            "id": "webscraper",
            "author": "Dify",
            "name": "webscraper",
            "plugin_id": null,
            "plugin_unique_identifier": "",
            "description": {
                "zh_Hans": "一个用于抓取网页的工具。",
                "en_US": "Web Scrapper tool kit is used to scrape web",
                "pt_BR": "Web Scrapper tool kit is used to scrape web",
                "ja_JP": "Web Scrapper tool kit is used to scrape web"
            },
            "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/webscraper/icon",
            "label": {
                "zh_Hans": "网页抓取",
                "en_US": "WebScraper",
                "pt_BR": "WebScraper",
                "ja_JP": "WebScraper"
            },
            "type": "builtin",
            "team_credentials": {},
            "is_team_authorization": true,
            "allow_delete": false,
            "tools": [
                {
                    "author": "Dify",
                    "name": "webscraper",
                    "label": {
                        "en_US": "Web Scraper",
                        "zh_Hans": "网页爬虫",
                        "pt_BR": "Web Scraper",
                        "ja_JP": "Web Scraper"
                    },
                    "description": {
                        "en_US": "A tool for scraping webpages.",
                        "zh_Hans": "一个用于爬取网页的工具。",
                        "pt_BR": "A tool for scraping webpages.",
                        "ja_JP": "A tool for scraping webpages."
                    },
                    "parameters": [
                        {
                            "name": "url",
                            "label": {
                                "en_US": "URL",
                                "zh_Hans": "网页链接",
                                "pt_BR": "URL",
                                "ja_JP": "URL"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "used for linking to webpages",
                                "zh_Hans": "用于链接到网页",
                                "pt_BR": "used for linking to webpages",
                                "ja_JP": "used for linking to webpages"
                            },
                            "form": "llm",
                            "llm_description": "url for scraping"
                        },
                        {
                            "name": "user_agent",
                            "label": {
                                "en_US": "User Agent",
                                "zh_Hans": "User Agent",
                                "pt_BR": "User Agent",
                                "ja_JP": "User Agent"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": false,
                            "default": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.1000.0 Safari/537.36",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "used for identifying the browser.",
                                "zh_Hans": "用于识别浏览器。",
                                "pt_BR": "used for identifying the browser.",
                                "ja_JP": "used for identifying the browser."
                            },
                            "form": "form",
                            "llm_description": null
                        },
                        {
                            "name": "generate_summary",
                            "label": {
                                "en_US": "Whether to generate summary",
                                "zh_Hans": "是否生成摘要",
                                "pt_BR": "Whether to generate summary",
                                "ja_JP": "Whether to generate summary"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": false,
                            "default": "false",
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [
                                {
                                    "value": "true",
                                    "label": {
                                        "en_US": "Yes",
                                        "zh_Hans": "是",
                                        "pt_BR": "Yes",
                                        "ja_JP": "Yes"
                                    }
                                },
                                {
                                    "value": "false",
                                    "label": {
                                        "en_US": "No",
                                        "zh_Hans": "否",
                                        "pt_BR": "No",
                                        "ja_JP": "No"
                                    }
                                }
                            ],
                            "type": "boolean",
                            "human_description": {
                                "en_US": "If true, the crawler will only return the page summary content.",
                                "zh_Hans": "如果启用，爬虫将仅返回页面摘要内容。",
                                "pt_BR": "If true, the crawler will only return the page summary content.",
                                "ja_JP": "If true, the crawler will only return the page summary content."
                            },
                            "form": "form",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "productivity"
                    ],
                    "output_schema": null
                }
            ],
            "labels": [
                "productivity"
            ]
        },
        {
            "id": "audio",
            "author": "hjlarry",
            "name": "audio",
            "plugin_id": null,
            "plugin_unique_identifier": "",
            "description": {
                "zh_Hans": "一个用于文本转语音和语音转文本的工具。",
                "en_US": "A tool for tts and asr.",
                "pt_BR": "A tool for tts and asr.",
                "ja_JP": "A tool for tts and asr."
            },
            "icon": "http://127.0.0.1:5001/console/api/workspaces/current/tool-provider/builtin/audio/icon",
            "label": {
                "zh_Hans": "Audio",
                "en_US": "Audio",
                "pt_BR": "Audio",
                "ja_JP": "Audio"
            },
            "type": "builtin",
            "team_credentials": {},
            "is_team_authorization": true,
            "allow_delete": false,
            "tools": [
                {
                    "author": "hjlarry",
                    "name": "tts",
                    "label": {
                        "en_US": "Text To Speech",
                        "zh_Hans": "Text To Speech",
                        "pt_BR": "Text To Speech",
                        "ja_JP": "Text To Speech"
                    },
                    "description": {
                        "en_US": "Convert text to audio file.",
                        "zh_Hans": "将文本转换为音频文件。",
                        "pt_BR": "Convert text to audio file.",
                        "ja_JP": "Convert text to audio file."
                    },
                    "parameters": [
                        {
                            "name": "text",
                            "label": {
                                "en_US": "Text",
                                "zh_Hans": "文本",
                                "pt_BR": "Text",
                                "ja_JP": "Text"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "string",
                            "human_description": {
                                "en_US": "The text to be converted.",
                                "zh_Hans": "要转换的文本。",
                                "pt_BR": "The text to be converted.",
                                "ja_JP": "The text to be converted."
                            },
                            "form": "llm",
                            "llm_description": "The text to be converted."
                        },
                        {
                            "name": "model",
                            "label": {
                                "en_US": "Model",
                                "zh_Hans": "Model",
                                "pt_BR": "Model",
                                "ja_JP": "Model"
                            },
                            "placeholder": {
                                "en_US": "Select a model",
                                "zh_Hans": "选择模型",
                                "pt_BR": "Select a model",
                                "ja_JP": "Select a model"
                            },
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "select",
                            "human_description": {
                                "en_US": "All available TTS models. You can config model in the Model Provider of Settings.",
                                "zh_Hans": "所有可用的 TTS 模型。你可以在设置中的模型供应商里配置。",
                                "pt_BR": "All available TTS models. You can config model in the Model Provider of Settings.",
                                "ja_JP": "All available TTS models. You can config model in the Model Provider of Settings."
                            },
                            "form": "form",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "utilities"
                    ],
                    "output_schema": null
                },
                {
                    "author": "hjlarry",
                    "name": "asr",
                    "label": {
                        "en_US": "Speech To Text",
                        "zh_Hans": "Speech To Text",
                        "pt_BR": "Speech To Text",
                        "ja_JP": "Speech To Text"
                    },
                    "description": {
                        "en_US": "Convert audio file to text.",
                        "zh_Hans": "将音频文件转换为文本。",
                        "pt_BR": "Convert audio file to text.",
                        "ja_JP": "Convert audio file to text."
                    },
                    "parameters": [
                        {
                            "name": "audio_file",
                            "label": {
                                "en_US": "Audio File",
                                "zh_Hans": "音频文件",
                                "pt_BR": "Audio File",
                                "ja_JP": "Audio File"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "file",
                            "human_description": {
                                "en_US": "The audio file to be converted.",
                                "zh_Hans": "要转换的音频文件。",
                                "pt_BR": "The audio file to be converted.",
                                "ja_JP": "The audio file to be converted."
                            },
                            "form": "llm",
                            "llm_description": "The audio file to be converted."
                        },
                        {
                            "name": "model",
                            "label": {
                                "en_US": "Model",
                                "zh_Hans": "Model",
                                "pt_BR": "Model",
                                "ja_JP": "Model"
                            },
                            "placeholder": null,
                            "scope": null,
                            "auto_generate": null,
                            "template": null,
                            "required": true,
                            "default": null,
                            "min": null,
                            "max": null,
                            "precision": null,
                            "options": [],
                            "type": "select",
                            "human_description": {
                                "en_US": "All available ASR models. You can config model in the Model Provider of Settings.",
                                "zh_Hans": "所有可用的 ASR 模型。你可以在设置中的模型供应商里配置。",
                                "pt_BR": "All available ASR models. You can config model in the Model Provider of Settings.",
                                "ja_JP": "All available ASR models. You can config model in the Model Provider of Settings."
                            },
                            "form": "form",
                            "llm_description": null
                        }
                    ],
                    "labels": [
                        "utilities"
                    ],
                    "output_schema": null
                }
            ],
            "labels": [
                "utilities"
            ]
        }
    ],
    "fetchAllCustomTools": [],
    "fetchAllWorkflowTools": [],
    "useWorkflowConfig": {
        "parallel_depth_limit": 3
    },
    "useStrategyProviders": {}
}

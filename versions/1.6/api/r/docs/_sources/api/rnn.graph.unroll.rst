

``rnn.graph.unroll``
========================================

Description
----------------------

Unroll representation of RNN running on non CUDA device

Usage
----------

.. code:: r

	rnn.graph.unroll(

	  num_rnn_layer,

	  seq_len,

	  input_size = NULL,

	  num_embed = NULL,

	  num_hidden,

	  num_decode,

	  dropout = 0,

	  ignore_label = -1,

	  loss_output = NULL,

	  init.state = NULL,

	  config,

	  cell_type = "lstm",

	  masking = F,

	  output_last_state = F,

	  prefix = "",

	  data_name = "data",

	  label_name = "label"

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``num_rnn_layer``                      | int, number of stacked layers                              |
+----------------------------------------+------------------------------------------------------------+
| ``seq_len``                            | int, number of time steps to unroll                        |
+----------------------------------------+------------------------------------------------------------+
| ``input_size``                         | int, number of levels in the data - only used for          |
|                                        | embedding                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``num_embed``                          | int, default = NULL - no embedding. Dimension of the       |
|                                        | embedding                                                  |
|                                        | vectors                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``num_hidden``                         | int, size of the state in each RNN layer                   |
+----------------------------------------+------------------------------------------------------------+
| ``num_decode``                         | int, number of output variables in the decoding layer      |
+----------------------------------------+------------------------------------------------------------+
| ``dropout``                            |                                                            |
+----------------------------------------+------------------------------------------------------------+
| ``config``                             | Either seq-to-one or one-to-one                            |
+----------------------------------------+------------------------------------------------------------+
| ``cell_type``                          | Type of RNN cell: either gru or lstm                       |
+----------------------------------------+------------------------------------------------------------+






``rnn.graph``
==========================

Description
----------------------

Generate a RNN symbolic model - requires CUDA

Usage
----------

.. code:: r

	rnn.graph(

	  num_rnn_layer,

	  input_size = NULL,

	  num_embed = NULL,

	  num_hidden,

	  num_decode,

	  dropout = 0,

	  ignore_label = -1,

	  bidirectional = F,

	  loss_output = NULL,

	  config,

	  cell_type,

	  masking = F,

	  output_last_state = F,

	  rnn.state = NULL,

	  rnn.state.cell = NULL,

	  prefix = ""

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``num_rnn_layer``                      | int, number of stacked layers                              |
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




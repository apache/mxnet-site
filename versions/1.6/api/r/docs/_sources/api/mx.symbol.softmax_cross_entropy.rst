

``mx.symbol.softmax_cross_entropy``
======================================================================

Description
----------------------

Calculate cross entropy of softmax output and one-hot label.

- This operator computes the cross entropy in two steps:
	- Applies softmax function on the input array.
	- Computes and returns the cross entropy loss between the softmax output and the labels.

- The softmax function and cross entropy loss is given by:

  - Softmax Function:

  .. math:: \text{softmax}(x)_i = \frac{exp(x_i)}{\sum_j exp(x_j)}

  - Cross Entropy Function:

  .. math:: \text{CE(label, output)} = - \sum_i \text{label}_i \log(\text{output}_i)

	
**Example**::

	 
	 x = [[1, 2, 3],
	 [11, 7, 5]]
	 
	 label = [2, 0]
	 
	 softmax(x) = [[0.09003057, 0.24472848, 0.66524094],
	 [0.97962922, 0.01794253, 0.00242826]]
	 
	 softmax_cross_entropy(data, label) = - log(0.66524084) - log(0.97962922) = 0.4281871
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.softmax_cross_entropy(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``label``                              | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input label                                                |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/loss_binary_op.cc#L59


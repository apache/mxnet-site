.. raw:: html



``mx.nd.exp``
==========================

Description
----------------------

Returns element-wise exponential value of the input.

.. math::

   exp(x) = e^x \approx 2.718^x

**Example**::
	 
	 exp([0, 1, 2]) = [1., 2.71828175, 7.38905621]
	 
	 The storage type of ``exp`` output is always dense
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_basic.cc#L921


.. disqus::
   :disqus_identifier: mx.nd.exp

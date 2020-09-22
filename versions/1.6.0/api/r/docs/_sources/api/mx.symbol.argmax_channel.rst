

``mx.symbol.argmax_channel``
========================================================

Description
----------------------

Returns argmax indices of each channel from the input array.

The result will be an NDArray of shape (num_channel,).

In case of multiple occurrences of the maximum values, the indices corresponding to the first occurrence
are returned.


**Example**::

	 
	 x = [[ 0.,  1.,  2.],
	 [ 3.,  4.,  5.]]
	 
	 argmax_channel(x) = [ 2.,  2.]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.argmax_channel(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array                                            |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/broadcast_reduce_op_index.cc#L97

